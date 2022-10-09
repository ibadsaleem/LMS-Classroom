import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/LoginScreen';
import Profile from '../Screens/ProfileScreen';
import Classes from '../Screens/Restaurants';
import Signup from '../Screens/Signup';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LOGIN"
          component={Login}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="SIGNUP"
          component={Signup}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="CLASS"
          component={Classes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PROFILE"
          component={Profile}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

export default MyStack;