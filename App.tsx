import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StackNavigator as RootNavigator} from './src/navigators/StackNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
