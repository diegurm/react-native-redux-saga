import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';

import { isDevelopment } from '../utils/development';

if (isDevelopment()) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
