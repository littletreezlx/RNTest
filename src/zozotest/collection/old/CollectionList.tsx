import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NewItem} from './CollectionItem';

const DATA = Array.from(new Array(10).keys());

// console.log(DATA);
const newData = DATA.map(number => {
  return {value: number};
});
// console.log(newData);

const Divier = () => <View style={styles.divider} />;
const CollectionList = () => {
  const [data, setData] = useState(newData);

  const onSelectedStateChanged = (index, isSelected) => {
    // const sum = DATA.reduce((prev, cur, index, arr) => {
    //   // return prev + cur.isMultSelected ?? 1;
    //   // console.log(prev);
    //   // console.log(cur);
    //   console.log(cur.isMultSelected);

    //   return prev + cur.isMultSelected ?? 1;
    // });

    // console.log(isSelected);

    setData(state => {
      let newState = [...state];
      newState[index].isSelected = isSelected;
      return newState;
    });
  };

  console.log(data);

  return (
    <FlatList<Number>
      data={data}
      renderItem={props => (
        <NewItem onSelectedStateChanged={onSelectedStateChanged} {...props} />
      )}
      keyExtractor={(item: Number, index: Number) => {
        return '' + index;
      }}
      ItemSeparatorComponent={Divier}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default CollectionList;
