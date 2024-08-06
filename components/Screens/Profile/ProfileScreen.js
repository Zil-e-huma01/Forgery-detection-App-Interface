import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import BlankHeader from "../../ReusableComponents/BlankHeader";

import styles from "./ProfileScreenStyles";

const ProfileScreen = ({ route, navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState("UNKNOWN");

  useEffect(() => {
    if (route.params) {
      const { profileImage: newProfileImage, fullName: newFullName } =
        route.params;
      if (newProfileImage) {
        setProfileImage(newProfileImage);
      }
      if (newFullName) {
        setFullName(newFullName);
      }
    }
  }, [route.params]); // Re-run when parameters change

  // Data for the four rows in the content container
  const rowItems = [
    { icon: "settings", text: "Settings", route: "SettingsScreen" },
    { icon: "info", text: "About Us", route: "AboutScreen" },
    { icon: "help-circle", text: "Help", route: "HelpScreen" },
    { icon: "log-out", text: "Logout", route: null }, // This can trigger a sign-out function
  ];

  const handleRowPress = (route) => {
    if (route) {
      navigation.navigate(route); // Navigate to the specified screen
    } else {
      // Handle other cases, such as logging out
      console.log("Additional functionality");
    }
  };

  return (
    <View style={styles.container}>
      <BlankHeader />
      <LinearGradient
        colors={["#FFFFFF", "#9F9F9F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        <View style={styles.profileSection}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Feather name="user" size={80} color="#CCCCCC" />
          )}
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.email}>user@example.com</Text>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate("EditProfileScreen")}
          >
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={rowItems} // Source of the rows
            keyExtractor={(item, index) => `row-${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.row}
                onPress={() => handleRowPress(item.route)} // Handle row click
              >
                <View style={styles.rowIcon}>
                  <Feather name={item.icon} size={29} color="#9F9F9F" />
                </View>

                <Text style={styles.rowText}>{item.text}</Text>

                <Feather name="chevron-right" size={24} color="#9F9F9F" />
              </TouchableOpacity>
            )}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProfileScreen;
