import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HocFlatList from './HocFlatList';
import HocText from './HocText';

const HocTextView = HocText(props => <View style={styles.box} {...props} />, 5);

const HocTestPage = () => {
  const [count, setCount] = useState(100);

  return (
    <View>
      <HocTextView log={count} />
      <Button title="setCount" onPress={() => setCount(count => count + 1)} />
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
