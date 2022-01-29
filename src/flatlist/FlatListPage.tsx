import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import ItemView from './ItemView';

const FlatlistPage = () => {
  console.log('render__root');
  const [testList, setTestList] = useState<String[]>([
    'a',
    'b',
    'c',
    'd',
    'e',
    'a',
    'b',
    'c',
    'd',
    'e',
    'a',
    'b',
    'c',
    'd',
    'e',
  ]);

  const onpress = () => {
    console.log('onpress');
    let list = Array.from({length: 100}, (item, index) =>
      (index + 1).toString(),
    );
    setTestList(list);
  };

  const _renderItem = (item: any) => {
    return <ItemView item={item.item} />;
  };

  const onEndReached = () => {
    console.log('onEndReached');
  };

  return (
    <View>
      <FlatList<String>
        data={testList}
        renderItem={_renderItem}
        keyExtractor={(item: String, index: Number) => {
          // console.log(item);
          return '' + index;
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
};

export default FlatlistPage;
