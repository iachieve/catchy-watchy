import { combineReducers } from 'redux';
import itemReducer from './item_reducers';
import brandsReducer from './brands_reducer';
import colorsReducer from './colors_reducer';
import gendersReducer from './genders_reducers';
import usersReducer from './users_reducer';
import reviewReducer from './reviews_reducer';

export default combineReducers({
  items: itemReducer,
  brands: brandsReducer,
  genders: gendersReducer,
  colors: colorsReducer,
  users: usersReducer,
  reviews: reviewReducer
});