import { connect } from 'react-redux';
import ReviewsIndexForm from './reviews_index';
import {fetchReviews} from '../../actions/reviews_actions';
import { withRouter } from 'react-router-dom';
import { selectItemReviewers } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  let authors=[];
  let reviews = Object.values(state.entities.reviews);
  if(reviews){
    authors = selectItemReviewers(state, reviews)
  }
  return {
    reviews,
    authors
  };
}
const mapDispatchToProps = dispatch => ({
  fetchReviews: itemId => dispatch(fetchReviews(itemId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsIndexForm));