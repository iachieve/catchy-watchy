export const fetchReviews = itemId => {
  return $.ajax({
    method: 'GET',
    url: `api/items/${itemId}/reviews`
  })
};

export const createReview = (review, itemId) => (
  $.ajax({
    method: 'POST',
    url: `api/items/${itemId}/reviews`,
    data: { review }
  })
);