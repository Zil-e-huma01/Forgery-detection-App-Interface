import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Padding for the entire container
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20, // Space above and below the title
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // To position the camera icon on top of the profile image
  },
  profileImage: {
    width: 100, // Size for the profile image
    height: 100, // Size for the profile image
    borderRadius: 50, // Circular image
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
  cameraIcon: {
    position: "absolute", // To overlay the icon on the profile image
    bottom: 0,
    right: 0,
    backgroundColor: "#333", // Dark background color
    padding: 8, // Padding around the icon
    borderRadius: 20, // Round shape
  },
  label: {
    fontSize: 16, // Label font size
    fontWeight: "bold",
    color: "#333",
    marginTop: 20, // Space above the label
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10, // Padding inside the text input
    borderRadius: 8, // Rounded corners
    marginTop: 10, // Space above the text input
  },
});

export default styles;
