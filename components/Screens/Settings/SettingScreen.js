import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import styles from "./SettingScreenStyles";
import Separator from "../../ReusableComponents/Separator";

const SettingScreen = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SETTINGS</Text>
      </View>

      <Separator width={1} />

      <View style={styles.mainContent}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("AboutUsScreen")}
        >
          <Text style={styles.rowText}>About Us</Text>
          <Feather
            name="chevron-right"
            size={24}
            color="#000"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("TermsScreen")}
        >
          <Text style={styles.rowText}>Terms and Conditions</Text>
          <Feather
            name="chevron-right"
            size={24}
            color="#000"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("PrivacyScreen")}
        >
          <Text style={styles.rowText}>Privacy</Text>
          <Feather
            name="chevron-right"
            size={24}
            color="#000"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
