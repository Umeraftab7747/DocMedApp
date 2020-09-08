/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
const Stack = createStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// TAb navigations
import {TabNavigation} from './TabNavigation';
import {DrawerNavigator} from './DrawerNavigator';

// SCREENS

import {SignIn} from '../screen/signIn';
import {SignUp} from '../screen/signup';
import {Dashboard} from '../screen/dashboard';
import {DoctorScreen} from '../screen/doctor';

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorScreen"
          component={DoctorScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
