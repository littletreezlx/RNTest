import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CollectionItem from './old/CollectionItem';

const DATA = Array.from(new Array(100).keys());

const FlatlistPage = () => {
  return (
    <>
      <FlatList<Number>
        data={DATA}
        renderItem={props => <CollectionItem {...props} />}
        keyExtractor={(item: Number, index: Number) => {
          return '' + index;
        }}
      />
    </>
  );
};

export default FlatlistPage;
