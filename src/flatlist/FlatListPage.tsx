import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import ItemView from './ItemView';

const FlatlistPage = () => {
  console.log('render__root');
  // const [testList, setTestList] = useState<String[]>([
  //   'a',
  //   'b',
  //   'c',
  //   'd',
  //   'e',
  //   'a',
  //   'b',
  //   'c',
  //   'd',
  //   'e',
  //   'a',
  //   'b',
  //   'c',
  //   'd',
  //   'e',
  // ]);

  // const _renderItem = () => {
  //   // return <ItemView item={item.item} />;
  //   return <></>;
  // };

  return (
    <>
      <FlatList<String>
        data={[]}
        renderItem={() => <></>}
        keyExtractor={(item: String, index: Number) => {
          return '' + index;
        }}
      />
    </>
  );
};

export default FlatlistPage;
