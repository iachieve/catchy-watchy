import { combineReducers } from 'redux';
import itemReducer from './item_reducers';
import usersReducer from './users_reducer';
import reviewReducer from './reviews_reducer';
import cartItemsReducer from './carts_reducer';
import favoritesReducer from './favorites_reducer';

export default combineReducers({
  items: itemReducer,
  users: usersReducer,
  reviews: reviewReducer,
  cartItems: cartItemsReducer,
  favorites: favoritesReducer
});