import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CollectionItem from '../old/CollectionItem';

interface MultSelectableListProps {
  onSelectedStateChanged: (index: number, isSelected: boolean) => void;
}

//flatlist
//
// export function withMultSelectableList(WrapedComponent, SelectedComponent) {
//   return memo(({...otherProps}: MultSelectableListProps) => {
//     const selectedMap = useRef(new Set());

//     const onSelectedStateChanged = (index, isSelected) => {
//       if (isSelected) {
//         selectedMap.current.add(index);
//       } else {
//         selectedMap.current.delete(index);
//       }
//     };

//     return (
//       <View>
//         <WrapedComponent item={item} index={index} {...otherProps} />
//         <TouchableOpacity style={styles.wrapper} onPress={onPress}>
//           {item.isSelected && <SelectedComponent />}
//         </TouchableOpacity>
//       </View>
//     );
//   });
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     height: '100%',
//     width: '100%',
//     elevation: 1,
//     position: 'absolute',
//   },
// });
