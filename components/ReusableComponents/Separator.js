import React from "react";
import { View, StyleSheet } from "react-native";

// Reusable separator component with customizable width
const Separator = ({ width }) => (
  <View style={[styles.separator, { borderBottomWidth: width }]} />
);

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: "#ccc", // Customize the color as needed
  },
});

export default Separator;
