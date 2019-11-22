import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites_actions';


const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FAVORITES:
            return Object.assign({}, action.payload.favorites);
        case RECEIVE_FAVORITE:
            return Object.assign({}, state, {[action.payload.favorite.id]: action.payload.favorite});
        case REMOVE_FAVORITE:
            const newState = Object.assign({}, state);
            delete newState[action.payload.favoriteId];
            return newState;
        default:
            return state;
    }
};

export default favoritesReducer;