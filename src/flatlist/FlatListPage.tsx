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
  const [a, setA] = useState(0);

  // setTestList(['a','b','c'])

  // useEffect(() => {
  //   console.log('useEffect');
  //   setA(1);
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect2');
  //   setTimeout(() => {
  //     setA(1);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect2');
  //   setTimeout(() => {
  //     setTestList(oldValue => {
  //       return [...oldValue, 'd', 'e'];
  //     });
  //   }, 1000);
  // }, []);

  //content size changed
  useEffect(() => {
    console.log('useEffect2');
    setTimeout(() => {
      let list = Array.from({length: 100}, (item, index) =>
        (index + 1).toString(),
      );
      setTestList(list);
    }, 5000);
  }, []);

  // const TestFlatList = useMemo(() => {
  //   return () => {
  //     return (
  //       <FlatList<String>
  //         data={testList}
  //         renderItem={_renderItem}
  //         // keyExtractor={item => item.toUpperCase()}
  //       />
  //     );
  //   };
  // }, [testList]);

  // const TestFlatList = () => {
  //   console.log('render__FlatList');
  //   return (
  //     <FlatList<String>
  //       data={testList}
  //       renderItem={_renderItem}
  //       keyExtractor={(item) => {
  //         // console.log(item);
  //         return '' + item.toUpperCase()
  //       }}
  //     />
  //   );
  // };

  const onpress = () => {
    console.log('onpress');
    let list = Array.from({length: 100}, (item, index) =>
      (index + 1).toString(),
    );
    setTestList(list);
  };

  // const _renderItem = (item: any) => {
  //   console.log('item___out' + item.item);
  //   return (
  //     <TouchableOpacity
  //       style={{backgroundColor: 'grey', width: '100%'}}
  //       onPress={onpress}>
  //       <ItemView item={item.item} />
  //     </TouchableOpacity>
  //   );
  // };

  const _renderItem = (item: any) => {
    console.log('item___out' + item.item);
    return <ItemView item={item.item} />;
  };

  const TestFlatList = () => {
    return (
      <FlatList<String>
        // style={{backgroundColor: 'blue'}}
        data={testList}
        renderItem={_renderItem}
        keyExtractor={(item: String, index: Number) => {
          // console.log(item);
          return '' + index;
        }}
      />
    );
  };

  return (
    <View>
      <TestFlatList />
    </View>
  );
};

export default FlatlistPage;
