import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import Separator from "../ReusableComponents/Separator";
import styles from "./AboutUsStyles";

const TermsScreen = () => {
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
        <Text style={styles.title}>TERMS AND CONDITION</Text>
      </View>

      <Separator width={1} />

      <View style={styles.mainContent}>
        <Text style={styles.content}>
          Welcome to Forgery Finder. By accessing or using our app, you agree to
          comply with and be bound by the following terms and conditions. Please
          read them carefully.
        </Text>

        <Text style={styles.heading}>Acceptance of Terms</Text>
        <Text style={styles.content}>
          By using this app, you acknowledge that you have read and understood
          these terms and conditions and agree to comply with them. If you do
          not agree with these terms, you should stop using the app immediately.
        </Text>

        <Text style={styles.heading}>Use of the App</Text>
        <Text style={styles.content}>
          You agree to use the app only for lawful purposes and in a manner that
          does not infringe on the rights of others or restrict their use and
          enjoyment of the app. Unauthorized use or misuse of the app may result
          in termination of your access.
        </Text>

        <Text style={styles.heading}>User Accounts and Security</Text>
        <Text style={styles.content}>
          You may be required to create a user account to access certain
          features of the app. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account. If you suspect unauthorized access,
          notify us immediately.
        </Text>
        <Text style={styles.heading}>Intellectual Property</Text>
        <Text style={styles.content}>
          All content, trademarks, and intellectual property on this app are the
          property of Forgery Finder or its licensors. You may not use, copy, or
          distribute any content without explicit permission.
        </Text>
      </View>
    </View>
  );
};

export default TermsScreen;
