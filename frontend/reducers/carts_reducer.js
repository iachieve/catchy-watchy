import { RECEIVE_ALL_CART_ITEMS,  RECEIVE_CART_ITEM, 
  REMOVE_CART_ITEM, CHECK_OUT } from '../actions/carts_actions';

const cartItemsReducer = (state ={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return Object.assign({},state, action.payload.cartItems);
      case RECEIVE_CART_ITEM:
        return Object.assign({}, state, {[action.payload.cartItem.id]: action.payload.cartItem});
      case REMOVE_CART_ITEM:
        newState = Object.assign({}, state);
        delete newState[action.payload.cartItemId];
        return newState;
      case CHECK_OUT:
        return Object.assign({});
    default:
      return state;
  }
}

export default cartItemsReducer;