import React from 'react';
import {Link} from 'react-router-dom'
import ReviewsList from '../reviews/reviews_container';
import ReactDOM from "react-dom";
// import StarRatingComponent from "react-star-rating-component";
import ReviewFormContainer from '../reviews/review_form_container';
import Loader from '../loader/loader';
import StarRatings from 'react-star-ratings';

function changeDisplayedImage(src) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = src;
  expandImg.parentElement.style.display = "block";
}

class ItemDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {showReviewForm: false}
    this.state = { reviewAVG: 0}
    this.updateRateAverage = this.updateRateAverage.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.showReviewForm = this.showReviewForm.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
    this.state = { loading: true };
  }
  
  updateRateAverage(val){
    this.setState({reviewAVG: val})
  }

  addToFavorite(e){
    e.preventDefault();
    this.props.addToFavorite({item_id: this.props.match.params.itemId})
    .then(window.showAlert("item has been added to your favorites", 'alert-success'));
  }
  showReviewForm(e){
    e.preventDefault();
    this.setState({showReviewForm: !this.state.showReviewForm})
  }
 
  componentDidMount(){
    this.props.fetchItem(this.props.match.params.itemId).then(() => {
      this.setState({ loading: false });
    });
  }

  addCartItem(){
    let  cartItem = {item_id: this.props.match.params.itemId, qty: 1, 
                      total:this.props.item.price}
    this.props.createCartItem(cartItem)
    .then(window.showAlert("Item has been added to your shopping card.", 'alert-success'));
  }

  render(){
    if(this.state.loading){
      return <Loader/>;
    }
    let { item, reviewsCount } = this.props;

    let showReviewFormBtnClass = this.state.showReviewForm ? "btn btn-sm btn-danger rounded text-white":"btn btn-sm btn-secondary rounded text-warning";
    let showReviewFormBtnText = this.state.showReviewForm ? "cancel review":"leave review";

    const displayReviewButton = this.props.currentUserReview ? (null):(<Link to={`/`} className={showReviewFormBtnClass}
    onClick={this.showReviewForm}>
     <i className="fas fa-comments"> {showReviewFormBtnText}</i>
    </Link> )

    const displayReviewAndCartButtons = this.props.currentUser ?(
      <div className="btn-group">
      <a onClick={this.addToFavorite} className="btn btn-sm btn-secondary rounded cursor-pointer">
        <i className="fas fa-heart text-warning"> like</i>
      </a>
      &nbsp;
      <a onClick={this.addCartItem} className="btn btn-sm btn-secondary rounded cursor-pointer">
        <i className="fas fa-shopping-cart text-warning"> cart</i>
      </a>
      &nbsp;{displayReviewButton}&nbsp;
        
      <Link to={`/`} className="btn btn-sm btn-secondary rounded">
        <i className="fas fa-shopping-basket  text-warning"> shopping</i>
      </Link>
    </div>
    ):(
      <div className="btn-group">
      
      <Link to={`/`} className="btn btn-sm btn-secondary rounded">
        <i className="fas fa-shopping-basket  text-warning"> shopping</i>
      </Link>
    </div>
    );
    
    let thumbnails = item.photoUrls.slice();
        thumbnails.shift();
    let itemThumbnails = thumbnails.map((photo, i)=>(
        <img key={i}
          className=" loading item-detail-thumbnails rounded border mr-1 cursor-pointer"
          src={photo}
          alt={item.title}
          onClick={() => changeDisplayedImage(`${photo}`)}/>
    ));
 
    return (
      <div className="container">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <div className=" row">
              <div className=" col-md-7">
                <h3 className="product-title">{item.title}</h3>
                <div className="rating">
                  <div className="stars">
                  <StarRatings
                    rating={this.state.reviewAVG}
                    starRatedColor="gold"
                    starDimension="20px" starSpacing="5px"
                    // changeRating={this.changeRating}
                    numberOfStars={5} name='rating'/>

                    {/* <StarRatingComponent name="whatever" emptyStarColor='#fff' 
                    editing={false} starCount={5} value={2.5} /> */}

                  </div>
                  <p className="review-no text-warning">{reviewsCount} reviews</p>
                </div>

                <p><span className="text-warning">brand: </span>{item.brand}</p>
                <p><span className="text-warning">color: </span>{item.color}</p>
                <p className="text-info"><span className="text-warning">price: </span>$<strong>{item.price}</strong></p>
                <p className="text-warning">description:</p><p className="pl-4">{item.description}</p>
                <span className="clearfix"></span> 
 
              {displayReviewAndCartButtons}
              </div>
              <div className="col-md-5">
                  <img  id="expandedImg" className=" loading border mb-5 bg-white rounded"  src={item.photoUrls[0]}  />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">&nbsp;</div>
            </div>

            <div className="row justify-content-md-center">
              {itemThumbnails}
            </div>
          </div>
        </div>
        { this.state.showReviewForm ? <ReviewFormContainer showReviewForm={this.showReviewForm}/> : null }

        <ReviewsList updateRateAverage = {this.updateRateAverage}/>
      </div>
    );
  }
}

export default ItemDetails;


