import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import GradientButton from "../ReusableComponents/GradientButton";
import styles from "./SignupStyles";
import Blankheader from "../ReusableComponents/BlankHeader";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeInput, setActiveInput] = useState(null);
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Please Enter the sane Password in both fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
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
      <LinearGradient
        colors={["#FFFFFF", "#9F9F9F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <View style={styles.Container}>
          <Text style={styles.mainHeading}>Lets Get Started!</Text>
          <Text style={styles.subHeading}>
            create an account to get all features
          </Text>
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
              color={activeInput === "email" ? "#69C9D6" : "gray"}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={
                activeInput === "email" ? "#69C9D6" : "gray"
              }
              value={email}
              onChangeText={setEmail}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              autoCapitalize="none"
              keyboardType="email-address"
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
              color={activeInput === "password" ? "#69C9D6" : "gray"}
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={
                activeInput === "password" ? "#69C9D6" : "gray"
              }
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

          <View
            style={[
              styles.inputContainer,
              {
                borderColor:
                  activeInput === "confirmPassword" ? "#69C9D6" : "#fff",
              },
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={24}
              color={activeInput === "confirmPassword" ? "#69C9D6" : "gray"}
              style={styles.icon}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={
                activeInput === "confirmPassword" ? "#69C9D6" : "gray"
              }
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onFocus={() => handleFocus("confirmPassword")}
              onBlur={handleBlur}
              secureTextEntry={true}
              style={[
                styles.textInput,
                {
                  color:
                    activeInput === "confirmPassword" ? "#69C9D6" : "#9F9F9F",
                },
              ]}
            />
          </View>

          <GradientButton
            height={60}
            width={200}
            text="Create"
            onPress={handleSignUp}
          />

          <View>
            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.footerLink}>Sign in</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignUpScreen;
