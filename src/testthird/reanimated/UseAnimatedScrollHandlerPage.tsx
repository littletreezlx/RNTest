import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import React, {useState} from 'react';

export const UseAnimatedScrollHandlerPage = () => {
  const translationY = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translationY.value = event.contentOffset.y;
    },
    onBeginDrag: event => {
      isScrolling.value = true;
      console.log(isScrolling.value);
    },
    onEndDrag: event => {
      isScrolling.value = false;
      console.log(isScrolling.value);
    },
  });

  const stylez_header = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -translationY.value,
        },
      ],
    };
  });

  const stylez_list = useAnimatedStyle(() => {
    return {
      transform: [
        {
          // translateY: -translationY.value,
          translateY: 0,
        },
      ],
    };
  });

  const Content = () => {
    return (
      <View>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
    );
  };

  return (
    <View>
      <Animated.View style={[styles.header, stylez_header]} />
      <Animated.ScrollView
        style={[styles.scroll, stylez_list]}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentInset={{top: -100, left: 0, bottom: 0, right: 0}}

        // scrollEnabled={false}
      >
        {/* <Content /> */}
        <Text style={styles.tv}>1</Text>
        <Text style={styles.tv}>2</Text>
        <Text style={styles.tv}>3</Text>
        <Text style={styles.tv}>4</Text>
        <Text style={styles.tv}>5</Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: 'black',
  },
  scroll: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'black',
  },
  tv: {
    fontSize: 200,
    color: 'black',
    backgroundColor: '#999999',
  },
});
