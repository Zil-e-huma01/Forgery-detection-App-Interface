import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import BlankHeader from "../../ReusableComponents/BlankHeader";
import GradientButton from "../../ReusableComponents/GradientButton";
import styles from "./EditProfileStyles";

const EditProfileScreen = ({ navigation }) => {
  const [profileImageUri, setProfileImageUri] = useState(null);
  const [fullName, setFullName] = useState("");

  const handleSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImageUri = result.assets[0].uri;
        setProfileImageUri(selectedImageUri);
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  const handleSaveChanges = () => {
    // Pass the new name and profile image back to the previous screen
    navigation.navigate("ProfileScreen", {
      profileImage: profileImageUri,
      fullName: fullName.trim(),
    });
  };

  return (
    <View style={styles.container}>
      <BlankHeader />

      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.imageContainer}>
        {profileImageUri ? (
          <Image
            source={{ uri: profileImageUri }}
            style={styles.profileImage}
          />
        ) : (
          <Feather name="user" size={80} color="#CCCCCC" />
        )}

        <TouchableOpacity style={styles.cameraIcon} onPress={handleSelectImage}>
          <Feather name="camera" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        style={styles.textInput}
        placeholder="Enter your full name"
      />

      <GradientButton
        height={50}
        text="Save Changes"
        onPress={handleSaveChanges}
      />
    </View>
  );
};

export default EditProfileScreen;
