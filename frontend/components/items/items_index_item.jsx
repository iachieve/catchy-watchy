import React from 'react';

const ItemList = ({ item, brand }) => {
  let photos = JSON.parse(item.photos)
  let randomImage = photos[Math.floor(Math.random() * photos.length)];

  return (

    <div className="col-sm-4  top-bottom-20">
      <div className="card">
        <img src={randomImage} alt="" className="card-img-top item-img"/>
        <div className="card-body">
          <h5 className="card-title">{brand.name}</h5>
          <span className="price">{item.price}</span>
          <p className=" block-with-text">{item.description }</p>
        </div>
      </div>
    </div>
  );
}

export default ItemList;