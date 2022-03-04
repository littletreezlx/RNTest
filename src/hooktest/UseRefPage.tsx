import React, {forwardRef, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Child = forwardRef((props, ref) => {
  console.log(props);
  console.log(ref);
  return <Text>123</Text>;
});

const UseRefPage = () => {
  console.log('render');
  // const [count, setCount] = useState(0);

  const listRef = useRef(null);

  return (
    <View>
      <Child ref={listRef} />
    </View>
  );
};

export default UseRefPage;
