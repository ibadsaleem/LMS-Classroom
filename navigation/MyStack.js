import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/LoginScreen';
import Profile from '../Screens/ProfileScreen';
import Restaurant from '../Screens/Restaurants';
import Category from '../Screens/Category';
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
          name="RESTAURANT"
          component={Restaurant}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PROFILE"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CATEGORY"
          component={Category}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

export default MyStack;