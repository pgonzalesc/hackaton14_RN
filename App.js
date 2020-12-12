
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Buttom } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Hackaton from './src/components/Hackaton';
import DrawerNavigator from "./src/components/DrawerNavigation";

const App = () => {
  return (
    // <Hackaton />
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
