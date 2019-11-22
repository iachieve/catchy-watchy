import React from 'react';
import { connect } from 'react-redux';
import ItemDetailsForm from './items_details'
import { fetchItem } from '../../actions/items_actions'
import { selectItemReviewsCount, selectCurrentUserReview } from '../../reducers/selectors'
import { createCartItem } from '../../actions/carts_actions'
import { createFavorite } from '../../actions/favorites_actions'


const mapStateToProps = (state, ownParams) => {
  let reviewsCount,currentUserReview;
  let item = state.entities.items[ownParams.match.params.itemId];
  if(item){
    reviewsCount = selectItemReviewsCount(state, item);
  }
  let currentUser = state.session.currentUser === null ? false: true;
  if(currentUser){
    currentUserReview = selectCurrentUserReview(state, state.session.currentUser.id,ownParams.match.params.itemId)
  }
  return {
    item, reviewsCount, currentUser, currentUserReview  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItem: itemId => dispatch(fetchItem(itemId)),
  createCartItem: cartItem => dispatch(createCartItem(cartItem)),
  addToFavorite: fav => dispatch(createFavorite(fav))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsForm);


