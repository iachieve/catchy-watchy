import React from "react";
import ReactDOM from "react-dom";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cartItem;
    this.updateQty = this.updateQty.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  updateQty(e){
    let qty = e.currentTarget.value;
    let totalPrice = parseFloat(this.state.price * qty).toFixed(2)
    this.setState({qty: qty, total: totalPrice});
    this.props.updateCartTotal(this.state.price, true);
  }

  deleteItem(){
    this.props.removeCartItem(this.state.id).
    then(()=> this.props.updateCartTotal(this.state.total, false));
  }

  render() {
    return (
      <div className="row border-bottom padding-t-b-1">
        <div className="col-3 border-right text-center">
          <img className=" shopping-cart-image rounded border loading
          mr-1" src={this.state.photoUrls[0]} />
        </div>
        <div className="col-6 border-right">
          <p>
            <strong className="text-warning">{this.state.brandName}</strong><br/>
            <span>{this.state.description}</span>
          </p>
        </div>
        <div className="col-1 border-right text-center">
          <input type="number" className="form-control" value={this.state.qty}  
          onChange={(e)=>this.updateQty(e)} min="1"/>
        </div>
        <div className="col-1 border-right text-center">{this.state.total}</div>
        <div className="col-1">
          <button onClick={this.deleteItem} 
          className="btn btn-sm btn-danger text-center" href="#">
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default CartItem;
