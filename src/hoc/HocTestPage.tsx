import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HocFlatList from './HocFlatList';
import HocText from './HocText';

const HocTestPage = () => {
  const HocTextView = () => HocText(() => <View style={styles.box} />, 5);

  return (
    <View>
      <HocTextView />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
});
export default HocTestPage;
