import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import {fetchCartItems} from '../../actions/carts_actions';
import {withRouter} from 'react-router-dom';
import {fetchItems} from '../../actions/items_actions';
import {fetchFavorites} from '../../actions/favorites_actions';

const mapStateToProps = (state, ownProps) => {
  let cartCount, favoritesCount;
  let currentUser = state.session.currentUser;
  if(currentUser){
    if(Object.values(state.entities.cartItems).length > 0){
      cartCount = Object.values(state.entities.cartItems).map(item => item.qty).
      reduce((prev, next) => prev + next);
    }
    favoritesCount = Object.values(state.entities.favorites).length;
  }
  
  return { currentUser, cartCount, favoritesCount}
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchCartItems: () => dispatch(fetchCartItems()),
  fetchItems: (searchQuery) => dispatch(fetchItems(searchQuery)),
  fetchFavorites : ()=> dispatch(fetchFavorites())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));