import React from 'react';
import { View } from 'react-native';
import { CombinedPage } from './CombinedPage';
import SharedValuePage from './SharedValuePage';
import {WorkletsPage} from './WorkletsPage';

export const ReanimatedTestPage = () => {
  return (
    <View>
      {/* <WorkletsPage /> */}
      {/* <SharedValuePage/> */}
      <CombinedPage/>

    </View>
  );
};
