import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import GradientButton from "../ReusableComponents/GradientButton";
import CheckBox from "expo-checkbox";
import styles from "./SigninStyles";
import Blankheader from "../ReusableComponents/BlankHeader";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleFocus = (InputName) => {
    setActiveInput(InputName);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  return (
    <View style={styles.background}>
      <Blankheader />
      <ImageBackground
        source={require("../../assets/loginPage.png")}
        style={styles.background}
      >
        <View style={styles.innerContainer}>
          <View
            style={[
              styles.inputContainer,
              { borderColor: activeInput === "email" ? "#69C9D6" : "#fff" },
            ]}
          >
            <Ionicons
              name="person"
              size={24}
              style={styles.icon}
              color={activeInput === "email" ? "#69C9D6" : "#fff"}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={"#fff"}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              style={[
                styles.textInput,
                {
                  color: activeInput === "Email" ? "#69C9D6" : "#9F9F9F",
                },
              ]}
            />
          </View>
          <View
            style={[
              styles.inputContainer,
              { borderColor: activeInput === "password" ? "#69C9D6" : "#fff" },
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={24}
              color={activeInput === "password" ? "#69C9D6" : "#fff"}
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#fff"}
              value={password}
              onChangeText={setPassword}
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
              secureTextEntry={true}
              style={[
                styles.textInput,
                {
                  color: activeInput === "Password" ? "#69C9D6" : "#9F9F9F",
                },
              ]}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Forget Password</Text>
            </TouchableOpacity>
          </View>

          <View>
            <GradientButton
              height={50}
              width={250}
              text="Sign In"
              onPress={handleSignIn}
            />
            <GradientButton
              height={50}
              width={170}
              text="Sign up"
              onPress={handleSignUp}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
