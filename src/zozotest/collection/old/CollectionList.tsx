import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NewItem} from './CollectionItem';
import {useSelectableList} from './useSelectableList';

const DATA = Array.from(new Array(10).keys());

const newData = DATA.map(number => {
  return {value: number};
});

const Divier = () => <View style={styles.divider} />;
const CollectionList = () => {
  const [data, setData] = useState(newData);

  const {onSelectedStateChanged, getSelectedItems} = useSelectableList(setData);

  const onSelectedStateChangedNew = useCallback(
    (index: number, isSelected: boolean) => {
      onSelectedStateChanged(index, isSelected);
      console.log(getSelectedItems(data));
    },
    [data, getSelectedItems, onSelectedStateChanged],
  );

  return (
    <FlatList<Number>
      data={data}
      renderItem={props => (
        <NewItem
          onSelectedStateChanged={onSelectedStateChangedNew}
          {...props}
        />
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
