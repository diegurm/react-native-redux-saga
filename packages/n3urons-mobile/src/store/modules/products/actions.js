import {
  LOAD_PRODUCTS,
  STORE_PRODUCTS,
  SET_PRODUCT_STATUS,
  SET_LOADING,
  SET_LAYOUT_MODE,
} from './constants';

export function loadProducts(searchText = '') {
  return {
    type: LOAD_PRODUCTS,
    searchText,
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

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}

export function setLayoutMode(layoutMode) {
  return {
    type: SET_LAYOUT_MODE,
    layoutMode,
  };
}
