import React from 'react';
import ItemsIndexItem from './items_index_item';
import {Link } from 'react-router-dom'

class Items extends React.Component {
  render() {
    if(!this.props.items){
      return null;
    }

    const postIndexItemsList = this.props.items.map(item => {

      let brand = this.props.brands.filter(brand=> brand.id === item.brandId)[0];
      let color = this.props.brands.filter(color=> color.id === item.colorId)[0];

     return (<Link to={`/items/${item.id}`} className="clear_a" key={item.id}>
      <ItemsIndexItem  item={item} brand={brand} color={color}/>
      </Link>)
  });
    
    return (
      <div className="container">
        <div className="top-5">
          <img src="https://www.worldofwatches.com/media/catalog/category/bulova.jpg" className="img-fluid rounded" />
        </div>
        <div className="row top-bottom-20">{postIndexItemsList}</div>
      </div>
    );
  }
}
export default Items;