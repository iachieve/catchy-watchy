import React from 'react';
import { connect } from 'react-redux';
import FavoriteItem from './favorite_item';
import {deleteFavorite} from '../../actions/favorites_actions'
// why state is empty here
const mapStateToProps = (state, ownProps) => {
  let favItem = ownProps.favItem;
 return{
   favItem
 }
};

const mapDispatchToProps = dispatch => ({
  deleteFavorite: favId => dispatch(deleteFavorite(favId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItem);