import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/items_actions';
const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return Object.assign({}, action.payload.items);
    case RECEIVE_ITEM:
      let item = action.payload.item
      return Object.assign({}, state, {[item.id]: item})
    default:
      return state;
  }
}

export default itemReducer;