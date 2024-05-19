import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../home/homepage.screen';
import UserPage from '../home/user/userpage.screen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="User" component={UserPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
