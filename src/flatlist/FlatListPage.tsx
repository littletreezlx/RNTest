import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';

const FlatlistPage = () => {
  console.log('init');
  const [testList, setTestList] = useState<String[]>(['a', 'b', 'c']);
  const [a, setA] = useState(0);

  // setTestList(['a','b','c'])

  useEffect(() => {
    console.log('useEffect');
    setA(1);
  }, []);

  // useEffect(() => {
  //   console.log('useEffect2');
  //   setTimeout(() => {
  //     setTestList(oldValue => {
  //       return [...oldValue, 'd', 'e'];
  //     });
  //   }, 1000);
  // }, []);

  const TestFlatList = useCallback(() => {
    return (
      <FlatList<String>
        data={testList}
        renderItem={_renderItem}
        // keyExtractor={item => item.toUpperCase()}
      />
    );
  }, [testList]);


  // const TestFlatList = () => {
  //   return (
  //     <FlatList<String>
  //       data={testList}
  //       renderItem={_renderItem}
  //       // keyExtractor={item => item.toUpperCase()}
  //     />
  //   );
  // };

  const _renderItem = ({item}) => {
    console.log(item);
    return <Text style={{color: 'black', fontSize: 50}}>{item}</Text>;
  };

  return (
    <View>
      <TestFlatList />
    </View>
  );
};

export default FlatlistPage;
