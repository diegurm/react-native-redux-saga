import { call, all, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as Actions from './actions';
import { LOAD_PRODUCTS } from './constants';

function* loadProducts(action) {
  yield put(Actions.setLoading(true));
  try {
    const { data } = yield call(api.get, `/products`);

    const products = action.searchText
      ? [
          ...data.filter(({ name }) =>
            name?.toUpperCase().includes(action?.searchText?.toUpperCase()),
          ),
        ]
      : [...data];

    yield put(Actions.storeProducts(products));
    yield put(Actions.setLoading(false));
  } catch (e) {
    // yield put({ type: FAILURE, error: e.message });
    yield put(Actions.setLoading(false));
  }
}

export default all([takeLatest(LOAD_PRODUCTS, loadProducts)]);
