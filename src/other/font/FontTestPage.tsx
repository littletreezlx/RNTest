import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FontTestPage = () => {
  const str = '# 123 456 & & ';

  return (
    <View style={styles.root_modal}>
      <Text style={styles.tv}>张</Text>
      {/* <Text style={styles.tv}>{str}</Text> */}
      {/* <Text style={styles.tv}>zhangsan</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root_modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tv: {
    fontSize: 400,
    // fontFamily: '',
    // fontWeight: '500',
    // fontFamily: 'sans-serif-medium',
  },
});

export default FontTestPage;
