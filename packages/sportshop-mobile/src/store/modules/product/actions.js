import { GET_PRODUCT, SET_LOADING, STORE_PRODUCT, SET_SIZE } from './constants';

export const getProduct = (productId) => {
  return {
    type: GET_PRODUCT,
    productId,
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading,
  };
};

export const storeProduct = (product) => {
  return {
    type: STORE_PRODUCT,
    product,
  };
};

export const setSize = (size) => {
  return {
    type: SET_SIZE,
    size,
  };
};
