// util.js
import {Text, Platform} from 'react-native';

export const setCustomText = () => {
  const TextRender = Text.render;

  let customStyle = {};
  // 重点，Fix Android 样式问题
  if (Platform.OS === 'android') {
    customStyle = {
      // fontFamily: '',
      // fontSize: 400,
      //   color: '#00ca20',
    };
  }
  // 为了方便演示，增加绿色字体
  if (Platform.OS === 'web') {
    customStyle = {
      lineHeight: '1.5em',
      fontSize: '1.125rem',
      marginVertical: '1em',
      textAlign: 'center',
      color: '#00ca20',
    };
  }

  Text.render = function render(props, ...rest) {
    const mergedProps = {...props, style: [customStyle, props.style]};
    return TextRender.apply(this, [mergedProps, ...rest]);
  };
};
