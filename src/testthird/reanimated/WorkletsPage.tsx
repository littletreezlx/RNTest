import React from 'react';
import {Button, Dimensions, Text, View} from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export const WorkletsPage = () => {

  const sharedVal = useSharedValue(3.1415)

  const style = useAnimatedStyle(() => {
    console.log("Running on the UI thread");
    return {
      opacity: 0.5
    };
  });

  const onPress = () => {
    sharedVal.value = Math.random()
    
    
  };

  return (
    <View>
      <Button title="test" onPress={onPress} />
    </View>
  );
};
