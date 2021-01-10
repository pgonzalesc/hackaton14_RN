
import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./src/components/DrawerNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
