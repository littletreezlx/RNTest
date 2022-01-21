import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import React from 'react';
import MyCollapseTestPage from './src/collapse/my/MyCollapseTestPage';
import AnimatedPage from './src/collapse/my/AnimatedPage';
import CollapseTestPage from './src/collapse/thirdpart/CollapseTestPage';
import TalentPageNew from './src/zozotest/talent/TalentPage';
import { FadeInView } from './src/anim/reactAnim';
import UseEffectTestPage from './src/hooktest/UseEffectTestPage';
import PureComponentPage from './src/other/pureComponent/PureComponentPage';
import FlatlistPage from './src/flatlist/FlatListPage';

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
      {/* <AnimatedPage /> */}
      <FlatlistPage/>
    </Provider>
  );
};

AppRegistry.registerComponent('NestedPage', () => NestedPage);

AppRegistry.registerComponent('RNTest', () => RNTest);
