import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import Separator from "../ReusableComponents/Separator";
import styles from "./AboutUsStyles";

const AboutUsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather
            name="chevron-left"
            size={24}
            color="#000"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>ABOUT US</Text>
      </View>

      <Separator width={1} />

      <View style={styles.mainContent}>
        <Text style={styles.content}>
          Welcome to Forgery Finder! Our app is designed to help you detect and
          prevent forgery in various contexts, providing a reliable and
          user-friendly solution for verification and authentication.
        </Text>

        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.content}>
          At Forgery Finder, our mission is to empower individuals and
          organizations to combat forgery and fraud. We aim to make verification
          accessible, accurate, and efficient, ensuring you can trust the
          documents and items you encounter.
        </Text>

        <Text style={styles.heading}>What We Do</Text>
        <Text style={styles.content}>
          Our app uses advanced technology and algorithms to identify signs of
          forgery in documents, images, and other items. Whether you're
          verifying identification, checking signatures, or confirming the
          authenticity of artwork, Forgery Finder is here to help.
        </Text>
      </View>
    </View>
  );
};

export default AboutUsScreen;
