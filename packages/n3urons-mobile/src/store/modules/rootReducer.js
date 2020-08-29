import { combineReducers } from 'redux';

import cart from './cart/reducer';
import products from './products/reducer';
import product from './product/reducer';

export default combineReducers({ cart, products, product });
