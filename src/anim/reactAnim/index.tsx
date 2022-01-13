import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

export const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // 透明度初始值设为0

  React.useEffect(() => {
    Animated.timing(
      // 随时间变化而执行动画
      fadeAnim, // 动画中的变量值
      {
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      },
    ).start(); // 开始执行动画
  }, [fadeAnim]);

  return (
    <Animated.View // 使用专门的可动画化的View组件
      style={{
        ...props.style,
        opacity: fadeAnim, // 将透明度绑定到动画变量值
      }}>
      {props.children}
    </Animated.View>
  );
};

// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView
        style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
          Fading in
        </Text>
      </FadeInView>
    </View>
  );
};
