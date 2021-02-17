import { call, all, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as Actions from './actions';
import { GET_PRODUCT } from './constants';

function* getProduct({ productId }) {
  yield put(Actions.setLoading(true));
  try {
    const { data } = yield call(api.get, `/products/${productId}`);
   
    yield put(Actions.storeProduct({ ...data }));
    yield put(Actions.setLoading(false));
  } catch (e) {
    // yield put({ type: FAILURE, error: e.message });
    yield put(Actions.setLoading(false));
  }
}

export default all([takeLatest(GET_PRODUCT, getProduct)]);
