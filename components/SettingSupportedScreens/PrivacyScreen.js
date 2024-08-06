import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import Separator from "../ReusableComponents/Separator";
import styles from "./AboutUsStyles";

const PrivacyScreen = () => {
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
        <Text style={styles.title}>PRIVACY POLICY</Text>
      </View>

      <Separator width={1} />

      <View style={styles.mainContent}>
        <Text style={styles.content}>
          Welcome to Forgery Finder. This Privacy Policy describes how we
          collect, use, and protect your personal information when you use our
          app. By using the app, you agree to the collection and use of
          information in accordance with this policy.
        </Text>

        <Text style={styles.heading}>Information We Collect</Text>
        <Text style={styles.content}>
          We may collect the following types of information from our users:
        </Text>

        <Text style={styles.content}>
          Personal Information: This may include your name, email address, and
          any other information you provide when creating an account or
          contacting us.
        </Text>
        <Text style={styles.content}>
          Usage Data: We collect information on how you interact with our app,
          such as which features you use and the frequency of use.
        </Text>
        <Text style={styles.content}>
          Device Information: We may collect information about the device you
          use to access the app, including the device model, operating system,
          and unique device identifiers.
        </Text>
        <Text style={styles.heading}>Data Security</Text>
        <Text style={styles.content}>
          We take the security of your personal information seriously and
          implement appropriate technical and organizational measures to protect
          it from unauthorized access, loss, or disclosure. However, no method
          of transmission over the internet or electronic storage is completely
          secure, so we cannot guarantee absolute security.
        </Text>
      </View>
    </View>
  );
};

export default PrivacyScreen;
