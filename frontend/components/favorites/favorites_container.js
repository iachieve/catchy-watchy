import React from 'react';
import { connect } from 'react-redux';
import FavoritesIndex from './favorites_index';
import { fetchFavorites } from '../../actions/favorites_actions';

const mapStateToProps = (state) => {
  let favorites = Object.values(state.entities.favorites);
  return { favorites }
};

const mapDispatchToProps = dispatch => ({
  fetchFavorites: ()=> dispatch(fetchFavorites()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesIndex);