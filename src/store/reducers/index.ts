import { combineReducers } from 'redux';
import filterReducer from './filter';

const rootReducer = combineReducers({
    filer: filterReducer,
})

export default rootReducer