import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  innerContainer: {
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    backgroundColor: "#2F4B4F",
    borderRadius: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 320,
    height: 60,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "white",
    borderColor: "transparent", // Remove outline
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 30,
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxLabel: {
    color: "white",
  },
  link: {
    color: "red",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: "100%",
  },
});
