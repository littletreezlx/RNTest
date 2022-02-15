import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import React, {Profiler} from 'react';
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
import {NativeBaseTestPage} from './src/other/nativeBase';
import {ConfirmDialogPage} from './src/base/ConfirmDialogPage';
import {ReanimatedTestPage} from './src/anim/reanimated';
import {ReactAnimTestPage} from './src/anim/reactAnim';
import BottomButtonPage from './src/other/bottom/BottomButtonPage';
import ModalPage from './src/other/dialog/CenterDialog';
import CenterDialogPage from './src/other/dialog/CenterDialogPage';
import QuickStartDemo from './src/collapse/thirdpart/Shared/QuickStartDemo';
import TabViewPage from './src/zozotest/TabViewPage';
import SingleView from './src/zozotest/SingleView';

// const MainPage = UseStateTestPage
// const MainPage = UseContextTestPage
// const MainPage = UseEffectTestPage

// const MainPage = AnimatedHeaderPage

// const MainPage = TalentPageNew
// const MainPage = CustomTestPage

// const MainPage = CollapseTestPage
// const MainPage = AsyncStoragePage

// const callback = (props: any) => {
//   console.log(props);
// };

function onRenderCallback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions, // 属于本次更新的 interactions 的集合
) {
  // 合计或记录渲染时间。。。
  let renderTime = commitTime - startTime;
  console.log(
    `id___${id}___phase___${phase}
    actualDuration___${actualDuration}
    baseDuration___${baseDuration}
    renderTime___${renderTime}
    interactions___${interactions}
  `,
  );
}

const RNTest = () => {
  console.log('render___out');
  return (
    <Provider store={store}>
      {/* <FlatlistPage/> */}
      {/* <NativeBaseTestPage /> */}
      {/* <ConfirmDialogPage/> */}
      {/* <ReactAnimTestPage /> */}
      {/* <ReanimatedTestPage /> */}
      {/* <FlatlistPage /> */}
      {/* <BottomButtonPage /> */}
      {/* <CenterDialogPage /> */}

      <TabViewPage />
      {/* <Profiler id="TabViewPage" onRender={onRenderCallback}>
      </Profiler> */}
    </Provider>
  );
};

AppRegistry.registerComponent('NestedPage', () => NestedPage);

AppRegistry.registerComponent('RNTest', () => RNTest);
