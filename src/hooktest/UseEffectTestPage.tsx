import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Button, Text, View} from 'react-native';

const UseEffectTestPage = () => {
  console.log('render');
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

  const onPress = () => {
    // setCount(count + 1);
    // setCount(count => count + 1);
    setCount(count => count);
  };

  useEffect(() => {
    console.log(`You clicked ${count} times`);
    console.log(count);
  }, [count]);

  return (
    <View>
      <Text>{desc}</Text>
      <Button title={'Click me'} onPress={onPress}></Button>
    </View>
  );
};

export default UseEffectTestPage;
