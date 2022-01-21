import React, {PureComponent, useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

class PureView extends PureComponent {
  render() {
    console.log('PureView 组件 render');
    return (
      <View>
        <Text>123</Text>
      </View>
    );
  }
}

export default PureView;
