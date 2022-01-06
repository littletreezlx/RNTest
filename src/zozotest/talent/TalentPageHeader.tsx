import React, {useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useHeaderMeasurements} from 'react-native-collapsible-tab-view';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const MIN_HEADER_HEIGHT = 50;

export const TalentPageHeader = () => {
  const {top, height} = useHeaderMeasurements();

  useEffect(() => {
    // console.log("🚀 ~ TalentPageHeader ~ height", height)
    // console.log("🚀 ~ TalentPageHeader ~ top", top)
  });
  // const stylez = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateY: interpolate(
  //           top.value,
  //           [0, -(height - MIN_HEADER_HEIGHT)],
  //           [0, (height - MIN_HEADER_HEIGHT) / 2],
  //         ),
  //       },
  //     ],
  //   };
  // });

  const stylez = useAnimatedStyle(() => {
    console.log('🚀 ~ TalentPageHeader ~ height', height);
    console.log('🚀 ~ TalentPageHeader ~ top', top);
    return {
      transform: [
        {
          translateY: interpolate(
            top.value,
            [0, -(height - MIN_HEADER_HEIGHT)],
            // [0, (height - MIN_HEADER_HEIGHT) / 2],
            [0, height - MIN_HEADER_HEIGHT],
          ),
        },
      ],
    };
  });

  return (
    <View style={[styles.root]}>
      <Animated.View style={[styles.container, stylez]}>
        <View style={styles.navigation_bar}>
          <Text style={styles.left_text}>'left'</Text>
          <Text style={styles.right_text}>'right'</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation_bar: {
    height: 50,
    width: '100%',
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left_text: {
    color: 'white',
    fontSize: 24,
  },
  right_text: {
    color: 'white',
    fontSize: 24,
  },
  root: {
    backgroundColor: '#2196f3',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 200,
  },
  container: {
    height: MIN_HEADER_HEIGHT,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    top: 0,
  },
});

export default TalentPageHeader;
