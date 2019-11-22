import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import FavoriteItemContainer from './favorite_item_container';
import Loader from '../loader/loader';


class FavoritesForm extends React.Component{
  constructor(props){
		super(props);
		this.state = { loading: true };
}
	
	componentDidMount(){
		this.props.fetchFavorites()
		.then(() => { this.setState({ loading: false });});
	}
	
  render(){
		if(this.state.loading){ return <Loader/>; }
		const favoritesList = this.props.favorites.map(fav =>{
			return (
				<FavoriteItemContainer favItem={fav} key={fav.id}></FavoriteItemContainer>
			);
		});
    return (

<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="card bg-dark text-white">
        <div className="card-header">
					<span className="text-warning">
						<i className="fas fa-heart"></i>&nbsp;
						<span>favorites list</span>
					</span>
				</div>
          <div className="card-body">
				 {favoritesList}
				  </div>
        </div>
      </div>
    </div>
</div>
    );
  }

}

export default FavoritesForm;