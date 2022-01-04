import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const KEY = 'Key_0';

const AsyncStoragePage = () => {
  const [text, setText] = useState('');

  const onSave = async () => {
    console.log('onSave');
    try {
      await AsyncStorage.setItem(KEY, text);
    } catch (eror) {
      console.log(eror);
    }
  };

  const onGet = async () => {
    console.log('onGet');
    try {
      let localValue = await AsyncStorage.getItem(KEY);
      setText(localValue);
    } catch (eror) {
      console.log(eror);
    }
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}></TextInput>
      <Button title="onSave" onPress={onSave}></Button>
      <Button title="onGet" onPress={onGet}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 100,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default AsyncStoragePage;
