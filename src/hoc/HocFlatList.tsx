import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HocFlatList = (WrapedFlatList: FlatList, log: number) => {
  console.log(log);
  return <WrapedFlatList />;
};

export default HocFlatList;

const styles = StyleSheet.create({});
