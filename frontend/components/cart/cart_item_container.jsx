import React from 'react';
import { connect } from 'react-redux';
import CartItem from './cart_item';
import {removeCartItem} from '../../actions/carts_actions'
// why state is empty here
const mapStateToProps = (state, ownProps) => {
  let cartItem = ownProps.cartItem;

 return{
   cartItem
 }
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);