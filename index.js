/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

// import App from './Flex';
//import RegisterScreen from './RegisterScreen';
import App from './HomeScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
