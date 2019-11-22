import React from 'react';
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";

const ReviewsItem = ({review, author}) => {
  if(!review){
    return null;
  }

  return (
    <div className="card m-all-05 border-secondary">
      <div className="card-header black-1 text-white">
        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid avatar" />
         <span>&nbsp;&nbsp;{author.name}</span>
      </div>

      <div className="card-body bg-dark text-white">
       <p>{review.reviewDate.split('T')[0]}</p>

        <div className="row">
          <div className="col-md-2">
        <StarRatingComponent name="whatever" emptyStarColor='#fff' editing={false} starCount={5} value={review.rank} />

          </div>
          <div className="col-md-10">
            <p>
              <a
                className="float-left"
                href="https://maniruzzaman-akash.blogspot.com/p/contact.html">
               
              </a>
            </p>
            <div className="clearfix"></div>

            <div dangerouslySetInnerHTML={{__html: review.body}} />
            {/* {review.body} */}
            
          </div>
        </div>
      </div>
    </div>
  );

}

export default ReviewsItem;