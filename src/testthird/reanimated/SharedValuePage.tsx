import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import React from 'react';

function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          // translateX: withSpring(offset.value * 255)
          translateX: offset.value * 255,
        },
      ],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => {
          offset.value = withSpring(Math.random(), {}, finished => {
            if (finished) {
              console.log('ANIMATION ENDED');
            } else {
              console.log('ANIMATION GOT CANCELLED');
            }
          });
        }}
        title="Move"
      />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
});

export default () => (
  <View>
    <Box></Box>
  </View>
);
