import * as FavoritesUtil from '../utils/favorites_util';
export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const receiveFavorites = payload => ({
  type: RECEIVE_ALL_FAVORITES,
  payload
});

export const receiveFavorite = payload => ({
  type: RECEIVE_FAVORITE,
  payload
});

export const receiveDeleteItem = payload => ({
  type: REMOVE_FAVORITE,
  payload
})

export const fetchFavorites = () => dispatch => (
  FavoritesUtil.fetchFavorites()
  .then(payload => (dispatch(receiveFavorites(payload))))
);

export const createFavorite = favorite => dispatch => (
  FavoritesUtil.createFavorite(favorite)
  .then(payload => (dispatch(receiveFavorite(payload))))
);

export const deleteFavorite = favoriteId => dispatch => (
  FavoritesUtil.deleteFavorite(favoriteId)
  .then(payload => (dispatch(receiveDeleteItem(payload) )))
);