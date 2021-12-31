import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { MessagePage, NestedPage } from './App';
import {name as appName} from './app.json';
import Example from './src/collapse/ExampleComponent';
import UseStateTestPage from './src/hooktest/UseStateTestPage';
import UseContextTestPage from './src/hooktest/UseContextTestPage';
import UseEffectTestPage from './src/hooktest/UseEffectTestPage';
import AnimatedHeaderPage from './src/collapse/AnimatedHeader';
import TalentPageNew from './src/zozotest/talent/TalentPage';





// const MainPage = UseStateTestPage
// const MainPage = UseContextTestPage
// const MainPage = UseEffectTestPage

// const MainPage = AnimatedHeaderPage

const MainPage = TalentPageNew
// const MainPage = CustomTestPage



AppRegistry.registerComponent("NestedPage", () => NestedPage);


AppRegistry.registerComponent("Example", () => Example);


AppRegistry.registerComponent("MainPage", () => MainPage);
