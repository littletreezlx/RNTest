import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Button, Text, View} from 'react-native';

const UseEffectTestPage = () => {
  const ary = useRef(['a']);
  const [count, setCount] = useState(0);
  const [desc, setDesc] = useState(`You clicked {count} times`);

  // const testDep = (param: String)=>{
  //   return "AAA" + param
  // }

  // const testDep = useCallback(
  //   (param: String) => {
  //     return 'AAA';
  //   },
  //   [count],
  // );

  // useEffect(() => {
  //   setDesc(`You clicked ${count} times`);
  //   console.log(`You clicked ${count} times`);
  //   setCount(count + 1)
  // }, [ary]);

  // //testDep
  // useEffect(() => {
  //   console.log('testDep');
  // }, [testDep]);

  const getCount = () => {
    console.log(count);
  };

  console.log(getCount);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
    getCount();
  }, [getCount]);

  return (
    <View>
      <Text>{desc}</Text>
      <Button title={'Click me'} onPress={() => setCount(count + 1)}></Button>
    </View>
  );
};

export default UseEffectTestPage;
