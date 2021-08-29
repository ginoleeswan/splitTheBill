import React from "react";
import { BillProvider } from "./app/context/BillContext";

import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "@use-expo/font";

import { ScrollProvider } from "./app/config/config";
import { HomeNavigation } from "./app/components/Navigation/HomeNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "VisbyRoundCF-Regular": require("./app/assets/fonts/VisbyRoundCF-Regular.ttf"),
    "VisbyRoundCF-Bold": require("./app/assets/fonts/VisbyRoundCF-Bold.ttf"),
    "VisbyRoundCF-DemiBold": require("./app/assets/fonts/VisbyRoundCF-DemiBold.ttf"),
    "VisbyRoundCF-Medium": require("./app/assets/fonts/VisbyRoundCF-Medium.ttf"),
    "VisbyRoundCF-Heavy": require("./app/assets/fonts/VisbyRoundCF-Heavy.ttf"),
    "VisbyRoundCF-ExtraBold": require("./app/assets/fonts/VisbyRoundCF-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
}
