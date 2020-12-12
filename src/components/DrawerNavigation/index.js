import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, MainStackNavigator } from "../StackNavigator";
import Splash from '../../screens/Splash';
import TabNavigator from "../TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Splash" component={Splash} />
      <Drawer.Screen name="Home" component={TabNavigator} />
      {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;