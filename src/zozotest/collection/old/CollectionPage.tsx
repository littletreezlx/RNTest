import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CollectionList from './CollectionList';


const CollectionPage = () => {
  return (
    <View>
      <CollectionList />
    </View>
  );
};

export default CollectionPage;
