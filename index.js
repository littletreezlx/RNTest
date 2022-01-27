import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import React from 'react';
import MyCollapseTestPage from './src/collapse/my/MyCollapseTestPage';
import AnimatedPage from './src/collapse/my/AnimatedPage';
import CollapseTestPage from './src/collapse/thirdpart/CollapseTestPage';
import TalentPageNew from './src/zozotest/talent/TalentPage';
import {FadeInView} from './src/anim/reactAnim/FadeInViewPage';
import UseEffectTestPage from './src/hooktest/UseEffectTestPage';
import PureComponentPage from './src/other/pureComponent/PureComponentPage';
import FlatlistPage from './src/flatlist/FlatListPage';
import AlertPage from './src/other/alert/AlertPage';
import {AlertDialog, NativeBaseProvider} from 'native-base';
import { NativeBaseTestPage } from './src/other/nativeBase';
import { ConfirmDialogPage } from './src/base/ConfirmDialogPage';
import { ReanimatedTestPage } from './src/anim/reanimated';
import { ReactAnimTestPage } from './src/anim/reactAnim';

// const MainPage = UseStateTestPage
// const MainPage = UseContextTestPage
// const MainPage = UseEffectTestPage

// const MainPage = AnimatedHeaderPage

// const MainPage = TalentPageNew
// const MainPage = CustomTestPage

// const MainPage = CollapseTestPage
// const MainPage = AsyncStoragePage

const RNTest = () => {
  return (
    <Provider store={store}>
        {/* <FlatlistPage/> */}
        {/* <NativeBaseTestPage /> */}
        {/* <ConfirmDialogPage/> */}
        {/* <ReactAnimTestPage /> */}
        <ReanimatedTestPage />
    </Provider>
  );
};

AppRegistry.registerComponent('NestedPage', () => NestedPage);

AppRegistry.registerComponent('RNTest', () => RNTest);
