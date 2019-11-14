import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/items_actions';

const brandReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.payload.brands;
    case RECEIVE_ITEM:
      let brand = action.payload.brand
      return Object.assign({}, state, { [brand.id]: brand })
    default:
      return state;
  }
}

export default brandReducer;