import { combineReducers } from 'redux';
import filterReducer from './filter';
import searchReducer from './search';
import itemsReducer from './items';
import cartReducer from './cart';
import authReducer from './auth';

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
  items: itemsReducer,
  cart: cartReducer,
  auth: authReducer
});

export default rootReducer;
