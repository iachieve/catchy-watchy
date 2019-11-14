import * as ReviewUtil from '../utils/reviews_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveAllReviews = payload => ({
  type: RECEIVE_ALL_REVIEWS,
  payload,
});

export const receiveReview = payload => ({
  type: RECEIVE_REVIEW,
  payload,
});


export const fetchReviews = (itemId) => dispatch => (
  ReviewUtil.fetchReviews(itemId).
    then(payload => (dispatch(receiveAllReviews(payload))
    ))
);

export const createReview = (review, itemId) => dispatch => (
  ReviewUtil.createReview(review, itemId).
    then(payload => (dispatch(receiveReview(payload))
    ))
);