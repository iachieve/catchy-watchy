import React, {Component} from 'react';
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class ReviewForm extends React.Component {
  constructor(props){
     super(props);
    this.state = this.props.review;
     this.handleSubmit = this.handleSubmit.bind(this);
     this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let itemId = this.props.review.itemId;
    
    this.props.createReview(this.state, itemId)
    .then(this.props.showReviewForm(e))
    .then(() => this.props.history.push(`/items/${itemId}`))
    .then(window.showAlert("thank you for your review", 'alert-success')
    );
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }
  
  onStarClick(nextValue, prevValue, name) {
    this.setState({rank: nextValue});
  }

  render(){
    return (
     
  <div className="card border-secondary bg-dark  mt-15rem">
  <div className="card-body bg-dark">
  <h5 className=" text-white card-header text-warning">
    <i className="fas fa-pen-alt"></i> your opinion matters</h5>

    <div className="row  mt-15rem">
      <div className="col-sm-12">
        <form>
        <div className="form-group row">
            <div className="col-sm-12 text-right">
            <div className="btn-group " role="group" aria-label="Basic example">
              {/* <button onClick={this.hideReviewForm} type="button"  */}
              <button onClick={this.props.showReviewForm} type="button" 
              className="btn btn-secondary" id="btnCancelReview">
              <i className="fas fa-comment-slash"></i>&nbsp;cancel review
              </button>
              <button onClick={this.handleSubmit} type="button" 
              className="btn btn-secondary border-left" id="btnCreateReview">
              <i className="far fa-share-square"></i>
                &nbsp;share review</button>
            </div>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label text-white">Rate</label>
            <div className="col-sm-10">
              <StarRatingComponent name="rank" emptyStarColor='#fff' 
              editing={true} starCount={5} value={this.state.rank} 
              onStarClick={this.onStarClick.bind(this)} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label text-white">Review</label>
            <div className="col-sm-10">

                <CKEditor editor={ ClassicEditor }
                    data={this.state.body}
                    onChange={ ( event, editor ) => {
                        // const data = editor.getData();
                        this.setState({body: editor.getData()})
                    } }/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
    );
  }
}


export default ReviewForm;