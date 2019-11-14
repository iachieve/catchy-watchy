import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/items_actions';

const genderReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.payload.genders;
    case RECEIVE_ITEM:
      let gender = action.payload.gender
      return Object.assign({}, state, { [gender.id]: gender })
    default:
      return state;
  }
}

export default genderReducer;