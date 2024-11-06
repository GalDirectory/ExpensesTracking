import {DataItem} from '../types';
import uuid from 'react-native-uuid';

export const createNewDataItem = (): DataItem => ({
  id: uuid.v4().toString(),
  title: '',
  amount: undefined,
  date: undefined,
});

export const groupBy = (
  list: DataItem[],
  keyGetter: (item: DataItem) => string,
) => {
  let map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      map.set(key, [...map.get(key), item]);
    }
  });
  return map;
};

export const buildSectionedData = (data: DataItem[]) => {
  const sorted = data.sort(
    (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime(),
  );

  const grouped = groupBy(sorted, _item => {
    return new Date(_item.date!).toLocaleDateString('en-GB');
  });
  const sectioned = Array.from(grouped, ([key, value]) => ({
    title: key,
    data: value,
  }));

  return sectioned;
};

export const filterData = (data: DataItem[], filter: DataItem): DataItem[] => {
  let filteredData: DataItem[] = [...data];

  if (filteredData) {
    filteredData = data.filter(
      _item =>
        (filter.title ? _item.title.includes(filter.title) : true) &&
        (filter.date
          ? new Date(_item.date!).toLocaleDateString('en-GB') ===
            new Date(filter.date).toLocaleDateString('en-GB')
          : true) &&
        (filter.amount ? Number(_item.amount) === Number(filter.amount) : true),
    );
  }

  return filteredData;
};
