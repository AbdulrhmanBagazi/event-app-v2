/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';

const name = Platform.OS === 'ios' ? 'events' : 'eventapp';

AppRegistry.registerComponent(name, () => App);
