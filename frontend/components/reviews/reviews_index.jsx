import React from 'react';
import ReviewItem from './reviews_item'

class ReviewIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchReviews(this.props.match.params.itemId);
  }

  render(){
    const authors = this.props.authors;
    const reviewItemsList = this.props.reviews.map(review => {
      let author = authors.filter(author => author.id === review.authorId)[0]
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