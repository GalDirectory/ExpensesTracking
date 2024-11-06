import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import {DataItem, StackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Header from '../components/core/Header';

export function ProfileScreen() {
  const [, setName] = useMMKVString('data');
  const [dataString, setDataString] = useMMKVString('data');

  const data: DataItem[] = (dataString && JSON.parse(dataString)) || [];

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const logout = () => {
    setName(undefined);
    setDataString(undefined);
    navigation.replace('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>{'Total Expenses Item'}</Text>
          <Text
            style={{
              marginLeft: 'auto',
              ...styles.text,
            }}>
            {data.length}
          </Text>
        </View>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.input}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '100%',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginBottom: 30,
    color: 'black',
    fontSize: 18,
  },
  contentContainer: {justifyContent: 'center', flex: 1, padding: 40},
  totalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    marginBottom: 30,
  },
  text: {
    color: 'black',
    fontSize: 18,
    borderBottomWidth: 0,
    paddingBottom: 10,
  },
});
