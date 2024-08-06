// GradientButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ height, width, text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { height, width }]}
        onPress={onPress}
      >
        <LinearGradient
          colors={["#2F4B4F", "#69C9D6", "#2F4B4F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    borderRadius: 40,
    overflow: "hidden", // Ensure that the gradient does not overflow the button bounds
    borderWidth: 3,
    borderColor: "white",
    margin: 10,
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default GradientButton;
