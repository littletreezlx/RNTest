import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { MessagePage, NestedPage } from './App';
import {name as appName} from './app.json';
import Example from './src/collapse/ExampleComponent';


AppRegistry.registerComponent("NestedPage", () => NestedPage);


AppRegistry.registerComponent("Example", () => Example);
