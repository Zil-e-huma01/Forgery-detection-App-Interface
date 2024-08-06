import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  editProfileButton: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 20,
    borderColor: "#ccc",
    elevation: 8,
  },
  editProfileButtonText: {
    color: "#010101",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 15,
    padding: 16,
    paddingTop: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 5,
  },
  rowIcon: {
    backgroundColor: "#E5E5E6",
    padding: 10,
    borderRadius: 5,
    elevation: 8,
  },
  rowText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    marginHorizontal: 10,
  },
});

export default styles;
