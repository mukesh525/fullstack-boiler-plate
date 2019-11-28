import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Index from './app/index.js';

AppRegistry.registerComponent(appName, () => Index);
