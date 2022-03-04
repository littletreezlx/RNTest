import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HocText = (WrapedView, initLog: nunmber) => {
  console.log('initLog' + initLog);
  return props => {
    // console.log(props);

    console.log('Log' + props.log * 2);

    return (
      <WrapedView
        style={{height: props.log, width: props.log, backgroundColor: 'black'}}
      />
    );
  };
};

export default HocText;
