import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import NavBar from "../NavBar";
import History from "../../screens/History";
import NewSplit from "../../screens/NewSplit";
import { NewSplitNavigation } from "./NewSplitNavigation";

const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={NavBar} />
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="New Split" component={NewSplitNavigation} /> */}
      {/* <Stack.Screen name="History" component={History} /> */}
    </Stack.Navigator>
  );
};
