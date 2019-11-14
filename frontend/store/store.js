import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import thunk from '../thunk/thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/root_reducers';


const middleWares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middleWares.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middleWares));


// const configureStore = (preloadedState = {}) => (
//   createStore(
//     rootReducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware(thunk, logger))
//   )
// );

export default configureStore;
