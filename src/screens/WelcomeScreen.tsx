import React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import {StackScreenProps} from '@react-navigation/stack';
import {MyTextInput} from '../components/core/MyTextInput';
import {MyButton} from '../components/core/MyButton';
import {StackParamList} from '../types';

type Props = StackScreenProps<StackParamList, 'WelcomeScreen'>;

export function WelcomeScreen({navigation}: Props) {
  const [, setStoredName] = useMMKVString('username');
  const [input, setInput] = useState<string>('');

  const onPressLogin = () => {
    if (input) {
      setStoredName(input);
      navigation.replace('AppTabs');
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}>
      <View style={styles.topView}>
        <MyTextInput
          value={input}
          containerStyle={styles.inputContainer}
          onChangedText={setInput}
          placeholder={'Enter your name'}
        />
      </View>
      <View>
        <MyButton title="Login" onPress={onPressLogin} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    flex: 0.8,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5B58AD',
    borderRadius: 3,
  },
});
