import { connect } from 'react-redux';
import ReviewsIndexForm from './reviews_index';
import {fetchReviews} from '../../actions/reviews_actions';
import { withRouter } from 'react-router-dom';
import { selectItemReviewers, selectItemReviews, selectItemReviewsAverage} from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  let authors=[];
  let reviewAVG;
  let itemId = ownProps.match.params.itemId;
  let reviews = selectItemReviews(state, itemId);
  if(reviews.length > 0){
    authors = selectItemReviewers(state, reviews)
    reviewAVG = selectItemReviewsAverage(state, itemId);;
  }

  return {
    reviews,reviewAVG, authors, itemId };
}
const mapDispatchToProps = dispatch => ({
  fetchReviews: itemId => dispatch(fetchReviews(itemId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsIndexForm));