import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';


const UseEffectTestPage = () => {

  const [count, setCount] = useState(0);
  const [desc, setDesc] = useState(`You clicked {count} times`);


  useEffect(() => {
    setDesc(`You clicked ${count} times`)
    console.log(`You clicked ${count} times`)
  },[count]);

  return (
    <View>
      <Text>{desc}</Text>
      <Button title={'Click me'} onPress={() => setCount(count + 1)}></Button>
    </View>
  );
};

export default UseEffectTestPage;
