import { connect } from 'react-redux';
import {createReview} from '../../actions/reviews_actions';
import ReviewForm from './review_form'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUser === null ? null :  state.session.currentUser.id
  return {
    review:{ rank:5, authorId : currentUserId, 
            itemId: ownProps.match.params.itemId},
  };
}
const mapDispatchToProps = dispatch => ({
  createReview: (review, itemId) => dispatch(createReview(review, itemId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));