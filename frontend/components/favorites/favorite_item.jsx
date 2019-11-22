import React from "react";
import ReactDOM from "react-dom";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.favItem;
    this.deleteItem = this.deleteItem.bind(this);
  }

  // bug: delete doesn't refresh
  deleteItem(){
    // debugger;
    this.props.deleteFavorite(this.state.id)
    .then(()=> this.props.history.push('/favorites'))
  }

  render() {
    return (
      <div className="row border-bottom padding-t-b-1">
          <div className="col-1">
          <button onClick={this.deleteItem} 
          className="btn btn-sm btn-danger text-center" href="#">
            {/* <i className="far fa-heart"></i> */}
            &#x2715;
          </button>
        </div>

     
        <div className="col-6">
          <p>
            <strong className="text-warning">{this.state.brandName}</strong>&nbsp;&nbsp;
            <span>{this.state.title}</span><br/>
              <p>{this.state.description}</p>
          </p>
        </div>

        <div className="col-5 text-center">
          <img className=" favorite-item-image rounded border loading
          mr-1" src={this.state.photoUrls[0]} />
        </div>
      
      </div>
    );
  }
}
export default FavoriteItem;
