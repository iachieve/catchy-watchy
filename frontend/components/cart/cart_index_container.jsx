import React from 'react';
import { connect } from 'react-redux';
import CartForm from './cart_index';
import { fetchCartItems, checkout } from '../../actions/carts_actions';

const mapStateToProps = (state) => {
  let cartItems = Object.values(state.entities.cartItems);
  return { cartItems }
};

const mapDispatchToProps = dispatch => ({
  fetchCartItems: ()=> dispatch(fetchCartItems()),
  checkout: ()=> dispatch(checkout())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);