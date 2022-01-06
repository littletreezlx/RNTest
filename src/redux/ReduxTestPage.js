import React, {useState} from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import {IncrementAction} from './action/action';
import {store} from './store/store';

const KEY = 'Key_0';

const ReduxTestPage = () => {

  const dispatch = useDispatch();

  const addNumber = () => {
    dispatch(IncrementAction());
    console.log(store.getState());
  };

  return (
    <View style={styles.root}>
      <Text> {store.getState.value}</Text>
      <Button title="addNumber" onPress={addNumber}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 100,
  },
});

export default ReduxTestPage;
