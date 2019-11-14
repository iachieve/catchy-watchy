import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/items_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/reviews_actions';


const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let user;
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return Object.assign({}, state, action.payload.users);

    case RECEIVE_ALL_REVIEWS:

      return Object.assign({}, state,  action.payload.users )

    case RECEIVE_REVIEW:
       user = action.payload.user
      return Object.assign({}, state, { [user.id]: user })

    case RECEIVE_ITEM:
       user = action.payload.seller
      return Object.assign({}, state, { [user.id]: user })
    case RECEIVE_CURRENT_USER:
       user = action.currentUser
      return Object.assign({}, state, { [user.id]: user })
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default userReducer;