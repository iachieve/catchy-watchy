import React from 'react';
import ItemsIndexItem from './items_index_item';
import {Link } from 'react-router-dom'
import Loader from '../loader/loader';
import Carousel from '../loader/carousel'

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount(){
    this.setState({ loading: true }, () => {
      this.props.fetchItems(this.props.queryString.searchQuery)
      .then(() => this.setState({ loading: false }));
    });
  };

  render() {
    if(this.state.loading){
      return <Loader/>;
    }

    const postIndexItemsList = this.props.items.map(item => {
     return (<ItemsIndexItem  item={item} key={item.id}/>)})
     
     let emptyTemplate;

     if(this.props.items.length == 0){
      emptyTemplate = (
        <div className="top-5 text-white justify-content-center">
         <br/><br/>
         <center> <h1 className="inset-text">Sorry, we couldn't find any results matching <i class="far fa-sad-tear"></i></h1></center>
        </div>
      )
     }
    return (

      <div className="container">
        <div className="top-5">

        <Carousel/>
          {/* <img src="https://www.worldofwatches.com/media/catalog/category/bulova.jpg" className="img-fluid rounded" /> */}
        </div>
        {emptyTemplate}
        <div className="row top-bottom-20">{postIndexItemsList}</div>
      </div>
    );
  }
}
export default Items;