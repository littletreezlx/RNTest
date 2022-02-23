import React, {useState} from 'react';
import {Button} from 'react-native';

const UseStateTestPage = () => {
  console.log('render');
  const [count, setCount] = useState(0);
  const [A, setA] = useState(0);

  return (
    <Button
      title={count.toString()}
      onPress={() => {
        setCount(count + 1);
        setA(state => state + 1);
      }}
      disabled={false}></Button>
  );
};

export default UseStateTestPage;
