import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { isDevelopment } from '../utils/development';

const sagaMiddleware = isDevelopment()
  ? createSagaMiddleware({ sagaMonitor: console.tron.createSagaMonitor() })
  : createSagaMiddleware();

const enchancer = isDevelopment()
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enchancer);

sagaMiddleware.run(rootSaga);

export default store;
