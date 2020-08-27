import {
  STORE_PRODUCTS,
  SET_PRODUCT_STATUS,
  SET_LOADING,
  SET_LAYOUT_MODE,
} from './constants';

const INITIAL_STATE = {
  loading: true,
  layoutMode: 'vertical',
  items: [],
};

export default function products(state = { ...INITIAL_STATE }, action) {
  switch (action.type) {
    case STORE_PRODUCTS: {
      return {
        ...state,
        items: [...action.products],
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case SET_PRODUCT_STATUS: {
      return {
        ...state,
        items: produce(state.items, (draft) => {
          const productIndex = draft.findIndex((p) => p.id === action.id);

          if (productIndex >= 0) {
            draft[productIndex].loading = Number(action.status);
          }
        }),
      };
    }
    case SET_LAYOUT_MODE: {
      return {
        ...state,
        layoutMode: action.layoutMode,
      };
    }
    default:
      return state;
  }
}
