import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppTabs} from './TabNavigator';
import {StackParamList} from '../types';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {CreateEditFilterExpenseScreen} from '../screens/CreateEditFilterExpenseModal';
import {useMMKVString} from 'react-native-mmkv';

const Stack = createStackNavigator<StackParamList>();

export const StackNavigator = () => {
  const [username] = useMMKVString('username');

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={username ? 'WelcomeScreen' : 'WelcomeScreen'}>
      <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
      <Stack.Screen name={'AppTabs'} component={AppTabs} />
      <Stack.Screen
        name={'CreateEditFilterExpenseScreen'}
        component={CreateEditFilterExpenseScreen}
        options={{presentation: 'transparentModal'}}
      />
    </Stack.Navigator>
  );
};
