import { all } from 'redux-saga/effects';

import products from './products/sagas';
import product from './product/sagas';
import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([products, product, cart]);
}
