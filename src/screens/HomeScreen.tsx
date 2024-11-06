import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';
import {DataItem} from '../types';
import {
  buildSectionedData,
  createNewDataItem,
  filterData,
} from '../helpers/data';
import {useState} from 'react';
import List from '../components/SectionList/List';
import {FilterButton} from '../components/FilterButton';
import Header from '../components/core/Header';

export function HomeScreen() {
  const [dataString] = useMMKVString('data');

  const data: DataItem[] = dataString ? JSON.parse(dataString) : [];

  const [filter, setFilter] = useState<DataItem>(createNewDataItem());

  const filteredData = filterData(data, filter);

  const sectionedData = buildSectionedData(filteredData);

  const sumAmount = filteredData.reduce(function (acc, obj) {
    return acc + (obj.amount || 0);
  }, 0);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.topView}>
        <View style={styles.totalView}>
          <Text style={styles.totalTitleText}>Total Expenses:</Text>
          <Text style={styles.totalValueText}>{`  $ ${sumAmount
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</Text>
        </View>

        <FilterButton setFilter={setFilter} />
      </View>

      {sectionedData && sectionedData.length ? (
        <List data={sectionedData} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  topView: {paddingHorizontal: 20},
  totalView: {
    flexDirection: 'row',
    paddingBottom: 30,
    alignItems: 'center',
  },
  totalTitleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalValueText: {color: 'black', fontSize: 20},
});
