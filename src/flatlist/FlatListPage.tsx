import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
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
    '1',
    '2',
    '3',
    '4',
    '5',
  ]);
  const [a, setA] = useState(0);

  // setTestList(['a','b','c'])

  // useEffect(() => {
  //   console.log('useEffect');
  //   setA(1);
  // }, []);

  useEffect(() => {
    console.log('useEffect2');
    setTimeout(() => {
      setA(1);
    }, 1000);
  }, []);

  // useEffect(() => {
  //   console.log('useEffect2');
  //   setTimeout(() => {
  //     setTestList(oldValue => {
  //       return [...oldValue, 'd', 'e'];
  //     });
  //   }, 1000);
  // }, []);

  const realItem = () => {
    console.log('render__Item');
    return (
      <View>
        <Text style={{color: 'black', fontSize: 100}}>{'123'}</Text>
      </View>
    );
  };

  const RealComponent = memo(realItem);
  // const RealComponent = realItem

  // const _renderItem = ({item}) => {
  //   return <RealComponent />;
  // };

  const _renderItem = ({item}) => {
    return <ItemView/>;
  };

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

  return (
    <View>
      <FlatList<String>
        data={testList}
        renderItem={_renderItem}
        keyExtractor={item => {
          // console.log(item);
          return '' + item.toUpperCase();
        }}
      />
    </View>
  );
};

export default FlatlistPage;
