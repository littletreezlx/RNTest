import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CollectionItem from '../old/CollectionItem';

interface MultSelectableItemProps {
  onSelectedStateChanged: (index: number, isSelected: boolean) => void;
  item: any;
  index: number;
}

export function withMultSelectableItem(WrapedComponent, SelectedComponent) {
  return memo(
    ({
      onSelectedStateChanged,
      item,
      index,
      ...otherProps
    }: MultSelectableItemProps) => {
      //   console.log('render_mult_item');
      // console.log(item);
      // console.log('props');
      // console.log(props);
      //   const [isSelected, setIsSelected] = useState(false);

      const onPress = () => {
        // setIsSelected(state => {
        //   item.isMultSelected = !state;
        //   if (onSelectedStateChanged) {
        //     onSelectedStateChanged(index, !state);
        //   }
        //   console.log('onPress Select');
        //   return !state;
        // });
        onSelectedStateChanged(index, !item.isSelected);
      };

      return (
        <View>
          <WrapedComponent item={item} index={index} {...otherProps} />
          <TouchableOpacity style={styles.wrapper} onPress={onPress}>
            {item.isSelected && <SelectedComponent />}
          </TouchableOpacity>
        </View>
      );
    },
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    elevation: 1,
    position: 'absolute',
  },
});
