import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginVertical: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  verticalSeparator: {
    height: "100%",
    width: 2,
    backgroundColor: "#CCCCCC",
    marginHorizontal: 10,
  },
  imgCount: {
    fontSize: 18,
    color: "#000",
  },
  imageCount: {
    fontSize: 18,
    color: "#000",
  },
  inputSection: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  urlInput: {
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: 350,
  },
  selectedImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 10,
  },
  recentImagesText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  recentImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  placeholder: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc", // Placeholder background color
    borderRadius: 10, // Optional, for rounded corners
  },
});

export default styles; // Correct export
