import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

//reactotron
import './src/config/ReactotronConfig';

//redux
import { Provider } from 'react-redux';
import store from './src/store';

//app
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
