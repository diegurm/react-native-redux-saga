import { call, all, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as Actions from './actions';
import { LOAD_PRODUCTS } from './constants';

function* loadProducts(action) {
  try {
    const { data } = yield call(api.get, `/products`);

    const products = action.searchText
      ? [...data.filter((product) => product.nome.includes(action.searchText))]
      : [...data];

    yield put(Actions.storeProducts(products));
  } catch (e) {
    // yield put({ type: FAILURE, error: e.message });
    console.log('error', e);
  }
}

export default all([takeLatest(LOAD_PRODUCTS, loadProducts)]);
