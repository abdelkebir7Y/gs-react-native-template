import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent, TopBar } from "../../components";

import { StackNavigator } from "./stack.navigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: TopBar }}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen name="stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
