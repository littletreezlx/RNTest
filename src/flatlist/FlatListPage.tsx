import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import CollapseItem from '../component/collapsibleTabViewTest/CollapseItem';
import ItemView from './ItemView';

const DATA = Array.from(new Array(3).keys());

const FlatlistPage = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList<Number>
        data={DATA}
        // contentInset={{top: -500}}
        // contentOffset={{y: -500, x: 0}}
        // contentContainerStyle={{paddingTop: 300}}
        renderItem={props => <CollapseItem {...props} />}
        keyExtractor={(item: Number, index: Number) => {
          return '' + index;
        }}
        onEndReached={() => {
          console.log('onEndReached');
        }}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
};

export default FlatlistPage;
