import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import React, {Profiler} from 'react';
import {OnPressPage} from './src/zozotest/collection/onPressPage';
import CollectionPage from './src/zozotest/collection/old/CollectionPage';
import { setCustomText } from './src/other/font/FontUtil';
import HocTestPage from './src/hoc/HocTestPage';

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
setCustomText();

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

      {/* <SwitchPage /> */}
      {/* <Profiler id="TabViewPage" onRender={onRenderCallback}>
      </Profiler> */}

      {/* <UseEffectTestPage /> */}
      {/* <HookTestPage /> */}
      {/* <ReanimatedTestPage /> */}
      {/* <NewCollapseTestPage /> */}
      {/* <FlatlistPage /> */}

      {/* <FontTestPage /> */}
      {/* <UseRefPage /> */}
      {/* <TabViewPage /> */}

      {/* <CollectionPage /> */}
      <HocTestPage />

    </Provider>
  );
};

AppRegistry.registerComponent('NestedPage', () => NestedPage);

AppRegistry.registerComponent('RNTest', () => RNTest);
