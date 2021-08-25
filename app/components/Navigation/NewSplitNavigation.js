import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewSplit from "../../screens/NewSplit";

const Stack = createNativeStackNavigator();

export const NewSplitNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="New Split" component={NewSplit} />
    </Stack.Navigator>
  );
};
