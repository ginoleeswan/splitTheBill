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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScrollProvider>
      <SliderProvider>
        <BillProvider>
          <NavigationContainer>
            {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator> */}
            <NavBar />
          </NavigationContainer>
        </BillProvider>
      </SliderProvider>
    </ScrollProvider>
  );
}
