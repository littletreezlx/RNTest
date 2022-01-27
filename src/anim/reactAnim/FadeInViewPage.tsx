import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

export const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // 透明度初始值设为0
  const sizeAnim = useRef(new Animated.Value(1)).current;

  //反过来。。
  const sizeAnimNew = Animated.divide(1, sizeAnim);

  useEffect(() => {
    console.log('useEffect');
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(sizeAnim, {
        toValue: 2,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeAnim, sizeAnim]);

  return (
    <Animated.View // 使用专门的可动画化的View组件
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [{scale: sizeAnimNew}],
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
      <FadeInView style={{backgroundColor: 'powderblue'}}>
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
      </FadeInView>
    </View>
  );
};
