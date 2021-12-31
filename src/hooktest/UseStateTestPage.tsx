import React, {useState} from 'react';
import {Button} from 'react-native';

const UseStateTestPage = () => {
  const [buttonText, setButtonText] = useState('Click me,   please');

  const handleClick = () => {
    return setButtonText('Thanks, been clicked!');
  };

  return (
    <Button
      title={buttonText}
      onPress={() => {
        console.log('AAA');
        setButtonText('Thanks, been clicked!');
      }}
      disabled={false}></Button>
  );
};

export default UseStateTestPage;
