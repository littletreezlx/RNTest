import React, {memo} from 'react';
import {View, StyleSheet, ListRenderItem, Text} from 'react-native';

const CollapseItem: ListRenderItem<number> = ({item, index}) => {
  // console.log('render_item_' + index);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.tv}>{index.toString()}</Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
  },
  tv: {
    fontSize: 40,
    height: 70,
  },
  divider: {
    height: 2,
    color: 'black',
    backgroundColor: 'black',
    width: '100%',
  },
});

export default memo(CollapseItem);
