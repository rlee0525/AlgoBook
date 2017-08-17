import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from './root_reducer';

const _defaultState = {};

const configureStore = (preloadedState = _defaultState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
