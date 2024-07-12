import { combineReducers } from 'redux';
import filterReducer from './filter';
import searchReducer from './search';
import itemsReducer from './items';
import cartReducer from './cart';

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
  items: itemsReducer,
  cart: cartReducer,
});

export default rootReducer;
