import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Text,
  TouchableOpacity,
} from 'react-native';
import {withMultSelectableItem} from '../hoc/MultipleSelectItem';

const CollectionItem: ListRenderItem<number> = ({item, index}) => {
  // console.log('render_item_' + index);

  const onPress = () => {
    console.log('onPress Item');
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.tv}>{index.toString()}</Text>
      </View>
    </TouchableOpacity>
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
  selected: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
  },
});

const SelectedView = () => <View style={styles.selected} />;

export const NewItem = withMultSelectableItem(CollectionItem, SelectedView);
