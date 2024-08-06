import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { storage, auth } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  query,
  collection,
  where,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import GradientButton from "../../ReusableComponents/GradientButton";
import Separator from "../../ReusableComponents/Separator";
import styles from "./HomeScreenStyles";

const HomeScreen = () => {
  const db = getFirestore();
  const currentUser = auth.currentUser;

  const [imageUri, setImageUri] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageCount, setImageCount] = useState(0);
  const [recentImages, setRecentImages] = useState([]);

  const fetchDownloadUrls = async (images) => {
    const updatedImages = [];

    for (const image of images) {
      try {
        const downloadUrl = await getImageDownloadURL(image.uri); // Get downloadable URL
        updatedImages.push({ ...image, uri: downloadUrl }); // Update the URI to HTTP/HTTPS
      } catch (error) {
        console.warn("Error fetching download URL:", error.message);
        // Even if fetching fails, we still add the image to the list with a warning
        updatedImages.push({ ...image, uri: null });
      }
    }

    return updatedImages;
  };

  const getImageDownloadURL = async (storageUri) => {
    const imageRef = ref(storage, storageUri.replace("gs://", ""));
    const downloadUrl = await getDownloadURL(imageRef);
    return downloadUrl;
  };

  useEffect(() => {
    if (currentUser) {
      console.log("Current User:", currentUser.uid); // Debug

      // Real-time listener for image count
      const userDocRef = doc(db, "users", currentUser.uid);
      const unsubscribeUserDoc = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const imageCount = docSnapshot.data().imageCount || 0;
          setImageCount(imageCount);
        }
      });

      // Real-time listener for recent images
      const imagesQuery = query(
        collection(db, "images"),
        where("userId", "==", currentUser.uid),
        orderBy("timestamp", "desc"),
        limit(7)
      );

      const unsubscribeImages = onSnapshot(
        imagesQuery,
        async (querySnapshot) => {
          const images = [];

          querySnapshot.forEach((doc) => {
            const data = doc.data();
            images.push({ id: doc.id, uri: data.uri });
          });

          const updatedImages = await fetchDownloadUrls(images); // Fetch all download URLs
          setRecentImages(updatedImages); // Update the recentImages state with valid URLs
        }
      );

      // Cleanup listeners on component unmount
      return () => {
        unsubscribeUserDoc();
        unsubscribeImages();
      };
    } else {
      console.warn("No current user. Skipping fetch."); // Debug
    }
  }, [currentUser]);

  const handleSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImageUri = result.assets[0].uri;
        setImageUri(selectedImageUri);
      }
    } catch (error) {
      console.error("Error selecting image:", error); // Handle errors
    }
  };

  const handleSubmitImage = async () => {
    try {
      if (!imageUri) {
        throw new Error("No image selected");
      }

      const timestamp = Date.now();
      const imageRef = ref(storage, `images/${timestamp}.jpg`);
      const response = await fetch(imageUri);
      const blob = await response.blob(); // Convert to binary
      await uploadBytes(imageRef, blob);

      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        await updateDoc(userDocRef, { imageCount: increment(1) }); // Increment image count

        const newImageDoc = {
          userId: currentUser.uid, // Store user ID
          uri: `images/${timestamp}.jpg`, // Store the correct path to Firebase Storage
          timestamp: new Date(), // Store the current timestamp
        };

        await setDoc(doc(collection(db, "images")), newImageDoc); // Store metadata in Firestore
      }
    } catch (error) {
      console.error("Error submitting image:", error); // Handle errors
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.title}>HOME</Text>

        <GradientButton
          height={36}
          width={80}
          text="A"
          onPress={() => console.log("Button Pressed")}
          style={styles.button}
        />
      </View>

      <Separator width={1} />

      <View style={styles.row}>
        <Text style={styles.imgCount}>Uploaded Images:</Text>
        <View style={styles.verticalSeparator} />
        <Text style={styles.imageCount}>{imageCount}</Text>
      </View>

      <Separator width={1} />

      <View style={styles.inputSection}>
        <TextInput
          style={styles.urlInput}
          placeholder="Enter Image URL"
          placeholderTextColor="#000"
          value={imageUrl}
          onChangeText={setImageUrl}
        />

        <TouchableOpacity onPress={handleSelectImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          ) : (
            <Feather
              name="image"
              size={200}
              color="#000"
              style={styles.iconCentered}
            />
          )}
        </TouchableOpacity>

        <GradientButton
          height={50}
          text="Submit Image"
          onPress={handleSubmitImage}
        />
      </View>

      <Separator width={1} />

      <Text style={styles.recentImagesText}>Recent Images</Text>

      <FlatList
        horizontal
        data={recentImages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.uri) {
            // Display the image if the URI is valid
            return (
              <Image source={{ uri: item.uri }} style={styles.recentImage} />
            );
          } else {
            // Display a placeholder or a fallback if no URI
            return (
              <View style={styles.placeholder}>
                <Text>No image available</Text>
              </View>
            );
          }
        }}
      />

      <Separator width={1} />
    </View>
  );
};

export default HomeScreen;
