import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../screens/Splash';
import Home from '../../screens/Home';

const RootStack = createStackNavigator();

const Hackaton = ()=> {
    return(
        <NavigationContainer>
          <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Splash" component={Splash} />
            <RootStack.Screen name="Home" component={Home} />
          </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Hackaton;