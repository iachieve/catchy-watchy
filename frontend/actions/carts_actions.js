import * as CartsUtil from '../utils/carts_utils';

export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CHECK_OUT = 'CHECK_OUT';

export const receiveAllCartItems = payload => ({
  type: RECEIVE_ALL_CART_ITEMS,
  payload,
});

export const receiveCartItem = payload => ({
  type: RECEIVE_CART_ITEM,
  payload,
});

export const receiveDeletedItem = payload => ({
  type: REMOVE_CART_ITEM,
  payload,
});
export const receiveCheckedOutItems = payload => ({
  type: CHECK_OUT,
  payload,
});

export const fetchCartItems = () => dispatch => (
  CartsUtil.fetchCartItems().
    then(payload => (dispatch(receiveAllCartItems(payload))
  ))
);

export const createCartItem = cartItem => dispatch => (
  CartsUtil.createCartItem(cartItem).
    then(payload => (dispatch(receiveCartItem(payload))
  ))
);
export const removeCartItem = cartItem => dispatch => (
  CartsUtil.removeCartItem(cartItem).
    then(payload => (dispatch(receiveDeletedItem(payload))
  ))
);
export const checkout = () => dispatch => (
  CartsUtil.checkout().
    then(() => (dispatch(receiveCheckedOutItems())
  ))
);