import { STORE_PRODUCT, SET_LOADING, SET_SIZE } from './constants';

const INITIAL_STATE = {
  loading: true,
  sizeSelect: '',
};

export default function produto(state = { ...INITIAL_STATE }, action) {
  switch (action.type) {
    case STORE_PRODUCT: {
      return {
        ...state,
        ...action.product,
      };
    }

    case SET_SIZE: {
      return {
        ...state,
        sizeSelect: action.size,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    default:
      return state;
  }
}
