import { combineReducers } from 'redux';
import sessionReducer from './session_reducers';
import entitiesReducer from './entities_reducer'

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer
});