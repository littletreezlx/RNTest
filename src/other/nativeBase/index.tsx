import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {CenterPage} from './CenterPage';
import ExampleAlertDialogPage from './ExampleAlertDialogPage';
import MyAlertDialogPage from './MyAlertDialogPage';
// import { MyAlertDialogPage } from './MyAlertDialogPage';

export const NativeBaseTestPage = () => {
  return  <NativeBaseProvider >
        {/* <MyAlertDialogPage /> */}

        <ExampleAlertDialogPage/>
    </NativeBaseProvider>

//   return <CenterPage />;
};
