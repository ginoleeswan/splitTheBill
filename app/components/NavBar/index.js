import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import NewSplit from "../../screens/NewSplit";
import History from "../../screens/History";
import { HomeNavigation } from "../Navigation/HomeNavigation";
import { NewSplitNavigation } from "../Navigation/NewSplitNavigation";

const Tab = createBottomTabNavigator();

// const getTabBarVisible = (route) => {
//   const params = route.params;
//   if (params) {
//     if (params.tabBarVisible === false) {
//       return false;
//     }
//   }
//   return true;
// };

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size, style }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "New Split") {
            iconName = focused ? "add" : "add";
          } else if (route.name === "History") {
            iconName = focused ? "receipt" : "receipt-outline";
          }

          // You can return any component that you like here!
          if (
            route.name === "Home" ||
            route.name === "Profile" ||
            route.name === "History"
          ) {
            return (
              <View style={{ position: "absolute", top: "50%" }}>
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  containerStyle={{ textAlignVertical: "center" }}
                />
              </View>
            );
          } else if (route.name === "New Split") {
            return (
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: -30,
                  width: 70,
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  borderColor: "grey",
                  borderWidth: 1,
                  backgroundColor: "#363355",
                  ...styles.shadow,
                }}
                onPress={() => navigation.navigate("New Split")}
              >
                <Ionicons
                  name={iconName}
                  size={size}
                  color="white"
                  containerStyle={{ textAlignVertical: "center" }}
                />
              </TouchableOpacity>
            );
          }
        },

        tabBarActiveTintColor: "#363355",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerTitleAlign: "center",

        tabBarStyle: {
          position: "absolute",
          flex: 1,
          alignSelf: "center",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          padding: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="New Split"
        component={NewSplitNavigation}
        // options={({ route }) => ({
        //   tabBarVisible: getTabBarVisible(route),
        // })}
      />
      <Tab.Screen name="History" component={History} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default NavBar;
