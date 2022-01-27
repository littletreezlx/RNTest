import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

export const InterpolateView = (props: any) => {
  //0->1
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('useEffect');
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [
          {
            scale: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 3],
            }),
          },
        ],
      }}>
      {props.children}
    </Animated.View>
  );
};

// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black',
      }}>
      <InterpolateView style={{backgroundColor: 'powderblue'}}>
        <Text
          style={{
            width: 100,
            height: 50,
            fontSize: 28,
            textAlign: 'center',
            margin: 10,
            color: 'black',
          }}>
          Fading
        </Text>
      </InterpolateView>
    </View>
  );
};
