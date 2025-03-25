import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./src/screens/LoginScreen";
import HomeTabsScreen from "./src/screens/HomeTabsScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabsScreen} />
      </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

