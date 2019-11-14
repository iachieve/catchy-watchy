import React from 'react';
import { connect } from 'react-redux';
import ItemsIndexForm from './items_index';
import {fetchItems} from '../../actions/items_actions';
import { selectItemBrands} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  let items = Object.values(state.entities.items);
  let brands;
  if(items){
    brands = selectItemBrands(state, items)
  }
  return {
      items,
      brands}
};

const mapDispatchToProps = (dispatch) => ({
  fetchItems: dispatch(fetchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndexForm);