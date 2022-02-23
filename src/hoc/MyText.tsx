import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HocText = (log: number) => {
  console.log(log);
  return <WrapedView style={{height: 200}} />;
};

export default HocText;
