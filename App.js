import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BillProvider } from "./app/context/BillContext";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/screens/Home";
import Profile from "./app/screens/Profile";
import NavBar from "./app/components/NavBar";
import { ScrollProvider } from "./app/config/config";
import { SliderProvider } from "./app/context/SliderContext";
import { HomeNavigation } from "./app/components/Navigation/HomeNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScrollProvider>
      <BillProvider>
        <NavigationContainer>
          <HomeNavigation />
        </NavigationContainer>
      </BillProvider>
    </ScrollProvider>
  );
}
