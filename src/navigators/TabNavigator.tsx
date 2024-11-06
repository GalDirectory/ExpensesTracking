import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CreateExpenseButton} from '../components/CreateExpenseButton';
import {TabParamList} from '../types';
import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<TabParamList>();

const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarItemStyle: {
    justifyContent: 'center',
  },
  tabBarLabelStyle: {
    fontSize: 13,
  },
  tabBarStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
    height: 87,
  },
  tabBarIconStyle: {display: 'none'},
};

export const AppTabs = () => (
  <Tab.Navigator screenOptions={tabScreenOptions}>
    <Tab.Screen
      name="HomeScreen"
      options={{title: 'Home'}}
      component={HomeScreen}
    />
    <Tab.Screen
      options={{tabBarButton: CreateExpenseButton}}
      name="CreateExpenseButton"
      component={() => null}
    />
    <Tab.Screen
      name="ProfileScreen"
      options={{title: 'Profile'}}
      component={ProfileScreen}
    />
  </Tab.Navigator>
);
