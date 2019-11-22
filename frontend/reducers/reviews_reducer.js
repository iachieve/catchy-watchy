import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/reviews_actions';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, state, action.payload.reviews);
    case RECEIVE_REVIEW:
      let review = action.payload.review
      return Object.assign({}, state, { [review.id]: review })
    default:
      return state;
  }
}

export default reviewReducer;