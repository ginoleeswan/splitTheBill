import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewSplit from "../../screens/NewSplit";
import AmountToPay from "../../screens/AmountToPay";

const Stack = createNativeStackNavigator();

export const NewSplitNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="New Split" component={NewSplit} />
      <Stack.Screen name="Amount To Pay" component={AmountToPay} />
    </Stack.Navigator>
  );
};
