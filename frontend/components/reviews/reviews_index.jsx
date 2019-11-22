import React from 'react';
import ReviewItem from './reviews_item'
import Loader from '../loader/loader';


class ReviewIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = { loading: true };
  }

  componentDidMount(){
    this.props.fetchReviews(this.props.itemId)
    .then(() => {this.setState({ loading: false })})
    .then(()=> this.props.updateRateAverage(this.props.reviewAVG))
  }

  render(){
    if(this.state.loading){
      return <Loader/>;
		}
    if(this.props.authors.length === 0 || this.props.reviews.length === 0){
     return( <div className="card bg-dark rounded top-5 text-center ">
      <h5 className=" text-white card-header text-warning">
      <i className="far fa-meh"></i> no reviews found</h5>
    </div>)
    }
    const authors = this.props.authors;
    const reviewItemsList = this.props.reviews.map(review => {
      const author = authors.filter(author => { return author.id === review.authorId})[0];
      return (<ReviewItem review={review} key={review.id} author={author}/>)
  });

    return (
      <div className="card bg-dark rounded top-5 ">
        <h5 className=" text-white card-header text-warning"><i className="fas fa-comments"></i> Read reviews</h5>
        {reviewItemsList}
      </div>
    );
  }
}

export default ReviewIndex;