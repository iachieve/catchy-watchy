import React from 'react';
import { connect } from 'react-redux';
import ItemsIndexForm from './items_index';
import {fetchItems} from '../../actions/items_actions';
import { selectItemBrands, selectItemColors} from '../../reducers/selectors';
import qs from 'query-string';

const mapStateToProps = (state, ownProps) => {
  const queryString = qs.parse(ownProps.location.search);
  let items = Object.values(state.entities.items);
  return {
      items, queryString}
};

const mapDispatchToProps = (dispatch) => ({
  fetchItems: (searchQuery) => dispatch(fetchItems(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndexForm);