import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions.js';

const _nullSession = {
  currentUser: null
};

export default (state = _nullSession, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser
      return Object.assign({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, _nullSession);
      // return Object.assign({ currentUser: _nullSession });

      
    default:
      return state;
  }
};
