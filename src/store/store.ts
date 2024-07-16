import { createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import loggerMiddleware from '../middleware/loggerMiddleware';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
