import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../features/home/screens/home.screen";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home/home" component={Home} />
    </Stack.Navigator>
  );
};
