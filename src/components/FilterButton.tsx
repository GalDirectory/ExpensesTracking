import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {MyButton} from '../components/core/MyButton';
import {StackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DataItem} from '../types';
import FilterIcon from '../../assets/filter.png';

type Props = {
  setFilter: Dispatch<SetStateAction<DataItem>>;
};

export const FilterButton = ({setFilter}: Props) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <MyButton
      containerStyle={styles.container}
      icon={FilterIcon}
      iconStyle={styles.icon}
      textStyle={styles.text}
      title="Filters"
      onPress={() => {
        navigation.navigate('CreateEditFilterExpenseScreen', {
          setFilter,
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginBottom: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  icon: {marginRight: 15},
  text: {color: 'black'},
});
