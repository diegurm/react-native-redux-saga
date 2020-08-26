import { STORE_PRODUCTS, SET_PRODUCT_STATUS } from './constants';

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
        loading: false,
        items: [...action.products],
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
    default:
      return state;
  }
}
