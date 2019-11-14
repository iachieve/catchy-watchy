import React from 'react';
import { connect } from 'react-redux';
import ItemDetailsForm from './items_details'
import { fetchItem } from '../../actions/items_actions'
import { selectItemReviewsCount } from '../../reducers/selectors'

const mapStateToProps = (state, ownParams) => {
  let brand, color, reviewsCount;

  let item = state.entities.items[ownParams.match.params.itemId];
  if(item){
    brand = state.entities.brands[item.brandId]
    color = state.entities.colors[item.colorId]
    reviewsCount = selectItemReviewsCount(state, item);
  }
  return {
    item,
    brand,
    color,
    reviewsCount
  };

};

const mapDispatchToProps = (dispatch) => ({
  fetchItem: itemId => dispatch(fetchItem(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsForm);


