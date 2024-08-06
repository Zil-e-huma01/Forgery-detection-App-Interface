import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 60, // Adds some space between the "Go Back" icon and the title
  },
  mainContent: {
    marginTop: 30,
  },
  heading: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 3,
  },
  content: {
    fontSize: 12,
  },
});

export default styles;
