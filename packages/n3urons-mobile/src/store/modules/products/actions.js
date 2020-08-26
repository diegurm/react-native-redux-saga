import { LOAD_PRODUCTS, STORE_PRODUCTS, SET_PRODUCT_STATUS } from './constants';

export function loadProducts(searhText = '') {
  return {
    type: LOAD_PRODUCTS,
    searhText,
  };
}

export function storeProducts(products) {
  return {
    type: STORE_PRODUCTS,
    products,
  };
}

export function setProductStatus(id, status) {
  return {
    type: SET_PRODUCT_STATUS,
    id,
    status,
  };
}
