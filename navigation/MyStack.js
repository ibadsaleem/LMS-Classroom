import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/LoginScreen';
import Profile from '../Screens/ProfileScreen';
import Classes from '../Screens/Classes';
import Announcements from '../Screens/Announcement';
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
          name="CLASS"
          component={Classes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PROFILE"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ANNOUNCEMENTS"
          component={Announcements}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
