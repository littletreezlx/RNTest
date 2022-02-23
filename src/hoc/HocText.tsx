import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HocText = (WrapedView, log: number) => {
  console.log(log);
  // return () => {
  //   <WrapedView />;
  // };
  console.log(WrapedView);
  return <WrapedView style={{height: 200}} />;
};

export default HocText;
