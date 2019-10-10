import {AppRegistry, Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { configure } from '@musora/services';

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;

global.width_ = Dimensions.get('window').width
global.height_ = Dimensions.get('window').height
global.factor_hor = Dimensions.get('window').width/375
global.factor_ver = Dimensions.get('window').height/812

configure({
    'baseURL': 'https://staging.musora.com', //'https://staging.pianote.com'
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
})