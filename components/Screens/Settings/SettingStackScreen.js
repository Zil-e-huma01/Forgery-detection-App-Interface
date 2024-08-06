import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "./SettingScreen";
import AboutUsScreen from "../../SettingSupportedScreens/AboutUsScreen";
import TermsScreen from "../../SettingSupportedScreens/TermsAndConsition";
import PrivacyScreen from "../../SettingSupportedScreens/PrivacyScreen";

const Stack = createNativeStackNavigator(); // Define the stack navigator

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SettingScreen">
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingStackNavigator;
