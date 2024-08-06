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
  Container: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeading: {
    fontSize: 30,
  },
  subHeading: {
    fontSize: 15,
    color: "#9F9F9F",
    top: -5,
    marginBottom: 45,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    backgroundColor: "#fff",
    elevation: 6,
    borderRadius: 40,
    marginBottom: 20,
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
  textInput: {
    color: "#9F9F9F",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
  footerText: {
    fontSize: 13,
    color: "#36454F",
    marginTop: 10,
  },
});
