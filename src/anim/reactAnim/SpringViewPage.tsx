import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

export const SpringView = (props: any) => {
  const sizeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    console.log('useEffect');
    Animated.spring(sizeAnim, {
      toValue: 3,
      useNativeDriver: false,
      speed:0.1,
    }).start()
  }, [ sizeAnim]);

  return (
    <Animated.View // 使用专门的可动画化的View组件
      style={{
        ...props.style,
        // opacity: fadeAnim,
        transform: [{scale: sizeAnim}],
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
        backgroundColor: 'black',
      }}>
      <SpringView style={{backgroundColor: 'powderblue'}}>
        <Text
          style={{
            width: 100,
            height: 50,
            fontSize: 28,
            textAlign: 'center',
            margin: 10,
            color: 'black',
          }}>
          Fading in
        </Text>
      </SpringView>
    </View>
  );
};
