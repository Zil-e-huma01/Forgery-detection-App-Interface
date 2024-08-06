import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { auth } from "../../../firebase";
import SettingStackNavigator from "../Settings/SettingStackScreen";
import HomeScreen from "../Home/HomeScreen";
import ProfileStackNavigator from "../Profile/ProfileStackNavigator";

const EmptyScreen = () => null;
const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <Tab.Navigator
      initialRouteName="Setting"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconName;
          switch (route.name) {
            case "Setting":
              iconName = "settings";
              break;
            case "Home":
              iconName = "grid";
              break;
            case "ProfileStackNavigator":
              iconName = "user";
              break;
            case "SignOut":
              iconName = "log-out";
              break;
          }

          const iconColor = focused ? "#2F4B4F" : "#fff";
          const backgroundColor = focused ? "#FFFFFF" : null; // White circle for active tab

          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 65,
                borderRadius: 50,
                backgroundColor, // Apply circular background if focused
                transform: [{ translateY: focused ? -12 : 0 }], // Shift upward if focused
              }}
            >
              <Feather
                name={iconName}
                size={size}
                color={iconColor}
                style={{
                  transform: [{ translateY: focused ? -1 : 0 }], // Move the icon upward
                }}
              />
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: "#2F4B4F",
          height: 60,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#CCCCCC",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Setting"
        component={SettingStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SignOut"
        component={EmptyScreen}
        options={{
          headerShown: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // Prevent navigation to SignOut tab
            handleSignOut(); // Call the sign-out function
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
