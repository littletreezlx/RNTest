import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import PureView from './PureView';

const PureComponentPage = () => {
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

  const FunctionPureView = useMemo(() => {
    console.log('FunctionPureView 组件 render');
    return () => {
      return <View>
        <Text>123</Text>
      </View>;
    };
  }, []);

  return (
    <View>
      <PureView />
      <FunctionPureView />
    </View>
  );
};

export default PureComponentPage;
