import React from 'react';
import {Link} from 'react-router-dom'
import ReviewsForm from '../reviews/reviews_container';
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";


function changeDisplayedImage(src) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = src;
  expandImg.parentElement.style.display = "block";
}

class ItemDetails extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchItem(this.props.match.params.itemId);
  }

  render(){
    let { item, brand, color, reviewsCount } = this.props;
    if(!item || !brand && !color){
      return null;
    }
  
    let photos = JSON.parse(item.photos)
    return (
      <div className="container mt-15rem">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <div className=" row">
              <div className=" col-md-8">
                <h3 className="product-title">{brand.name}</h3>
                <div className="rating">
                  <div className="stars">
                    <StarRatingComponent name="whatever" emptyStarColor='#fff' 
                    editing={false} starCount={5} value={4} />

                  </div>
                  <span className="review-no">{reviewsCount} reviews</span>
                </div>
                <p className="product-description">{item.description}</p>
                <h5>
                  <span className=""> current price:</span>
                  <span className="  text-warning">&nbsp; ${item.price}</span>
                </h5>
                <span className="clearfix"></span>
                <h5>
                  color: <span>{color.name}</span>
                </h5>

              
                <div className="btn-group">
                  <a href="#" className="btn btn-info btn-lg">
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    Add to Cart
                  </a>
                  &nbsp;
                  <Link to={`/items`} className="btn btn-lg btn-warning">
                    Continue shopping
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <img
                    id="expandedImg"
                    className="shadow p-3 mb-5 bg-white rounded"
                    src={photos[0]}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">&nbsp;</div>
            </div>

            <div className="row justify-content-md-center">
              <img
                className="img-thumbnail rounded border col-md-2 image-drop-shadow mr-1"
                src={photos[0]}
                alt="Nature"
                onClick={() => changeDisplayedImage(`${photos[0]}`)}
              />
              <img
                className="img-thumbnail rounded border col-md-2 image-drop-shadow mr-1"
                src={photos[1]}
                alt="Snow"
                onClick={() => changeDisplayedImage(`${photos[1]}`)}
              />
              <img
                className="img-thumbnail rounded border col-md-2 image-drop-shadow mr-1"
                src={photos[2]}
                alt="Mountains"
                onClick={() => changeDisplayedImage(`${photos[2]}`)}
              />
              <img
                className="img-thumbnail rounded border col-md-2 image-drop-shadow mr-1"
                src={photos[3]}
                alt="Lights"
                onClick={() => changeDisplayedImage(`${photos[3]}`)}
              />
            </div>
          </div>
        </div>

        <ReviewsForm />
      </div>
    );
  }
}

export default ItemDetails;


