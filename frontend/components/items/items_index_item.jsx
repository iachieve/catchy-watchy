import React from 'react';
import { withRouter} from 'react-router-dom'
import {Link } from 'react-router-dom'

const ItemList = ({ item }) => {

  return (
    <div className="col-sm-3  top-bottom-20">
      <div className="card">
      <Link to={`/items/${item.id}`} className="clear_a">
        <img src={item.photoUrls[0]} alt="" className="item-img loading"/>
        <center>{item.brand}
        &nbsp; <strong className="text-danger">${item.price}</strong>
        </center>
        <p className="block-with-text">{item.title}</p>
      </Link>
      </div>
    </div>
  );
}

export default ItemList;