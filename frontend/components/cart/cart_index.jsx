import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import CartItemContainer from './cart_item_container';
import Loader from '../loader/loader';


class CartForm extends React.Component{
  constructor(props){
		super(props);
		this.state = {cartTotal: this.props.cartTotal}
		this.updateCartTotal = this.updateCartTotal.bind(this);
		this.handleCheckout = this.handleCheckout.bind(this);
		this.state = { loading: true };
}
	
	componentDidMount(){
		this.props.fetchCartItems().then(()=>{
			let cartItems = this.props.cartItems;
			let newTotal = 0;
			if(cartItems.length > 0){
				newTotal = cartItems.map(item => item.total).reduce((prev, next) => prev + next);
			}
			this.setState({cartTotal: parseFloat(newTotal).toFixed(2)});}).
			then(() => {this.setState({ loading: false });});
	}

	updateCartTotal(itemPrice, increase){
		let total;
		let currentCartTotal = parseFloat(this.state.cartTotal); 
		if(increase){
			total = parseFloat( currentCartTotal + itemPrice).toFixed(2);
			this.setState({cartTotal: total});
		}else{
			total = parseFloat(currentCartTotal - itemPrice).toFixed(2);
			this.setState({cartTotal: total});
		}
	}
	
	handleCheckout(){
		this.props.checkout()
		.then(() => this.props.history.push(`/`));
	}
  render(){
		if(this.state.loading){
      return <Loader/>;
		}
		
		const cartItemsList = this.props.cartItems.map(item =>{
			return (
				<CartItemContainer updateCartTotal={this.updateCartTotal} cartItem={item} key={item.id}></CartItemContainer>
			);
		});
    return (

<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="card bg-dark text-white">
        <div className="card-header">
					<span className="text-warning">
						<i className="fas fa-shopping-cart"></i>
						<span>shopping card</span>
					</span>
				</div>
          <div className="card-body">
				{cartItemsList}
				<div className="row padding-t-b-1 text-right">
					<div className="col-md-12">
						<p>total: <strong>{this.state.cartTotal}</strong></p>
					</div>
					<div className="col-md-12">
						<Link to={`/`} className=" btn black-1 text-white">
										<i className="fas fa-shopping-basket text-white"></i>&nbsp;<span>continue shopping</span>
						</Link>
							&nbsp;
						<button onClick={()=> this.handleCheckout()} className=" btn black-1 text-white">
						<i className="fas fa-credit-card"></i>&nbsp;check out
						</button>

					</div>
					</div>
				  </div>
        </div>
      </div>
    </div>
</div>



    );
  }

}

export default CartForm;