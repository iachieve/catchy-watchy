import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/items_actions';

const colorReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.payload.colors;
    case RECEIVE_ITEM:
      let color = action.payload.color
      return Object.assign({}, state, { [color.id]: color })
    default:
      return state;
  }
}

export default colorReducer;