import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/LoginScreen';
import Profile from '../Screens/ProfileScreen';
import Classes from '../Screens/Classes';
import Announcements from '../Screens/Announcement';
import AddClass from '../Screens/AddClass';
import TeacherAddClass from '../Screens/TeacherAddClass';
import AddNewClass from '../Screens/AddNewClass';
import AddAssignment from '../Screens/AddAssignment';
import AddMaterial from '../Screens/AddMaterial';
import ChangePassword from '../Screens/ChangePassword';
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
        <Stack.Screen
          name="ADDCLASS"
          component={AddClass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TEACHERADDCLASS"
          component={TeacherAddClass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ADDNEWCLASS"
          component={AddNewClass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ASSIGNMENT"
          component={AddAssignment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MATERIAL"
          component={AddMaterial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CHANGEPASSWORD"
          component={ChangePassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
