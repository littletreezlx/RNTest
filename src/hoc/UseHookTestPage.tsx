import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {withLog} from './HocProxyFunction';
import {useLog, useSize} from './UseHook';

const HookView = props => {
  useLog();
  const {newStyle} = useSize(props);
  return <View style={styles.box} {...newStyle} />;
};

const UseHookTestPage = () => {
  const [size, setSize] = useState(100);
  return (
    <View>
      <HookView size={size} />
      <Button title="setCount" onPress={() => setSize(size => size + 10)} />
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
export default UseHookTestPage;
