import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {withLog} from './HocProxyFunction';

const OldView = props => <View style={styles.box} {...props} />;

const LogView = withLog(OldView);

const LogSizeView = withLog(LogView, 5);

const HocTestPage = () => {
  const [size, setSize] = useState(100);
  return (
    <View>
      <LogSizeView size={size} />

      {/* <LogView size={size} /> */}
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
export default HocTestPage;
