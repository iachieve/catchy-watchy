import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loader from '../loader/loader';
import uuid from 'react-uuid';
import Select from 'react-select';
import colorJson from '../../json/colors';
import brandsJson from '../../json/brands';
import gendersJson from '../../json/genders';

class ItemForm extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.assign({}, {imageUrls: [],imageFiles: [], loading: true}, this.props.item);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    this.handleRemoveImage = this.handleRemoveImage.bind(this)
    this.validForm = this.validForm.bind(this)
    this.update = this.update.bind(this);


  }

  update(field) {
    return (event) => {this.setState({[field]: event.target.value});}
  }

  componentDidMount(){
    this.setState({ loading: false });
  }
  uploadMultipleFiles(e) {
    e.preventDefault();
    if (this.state.imageFiles.length + e.target.files.length > 5) {
      window.showAlert("maximum number of images 5", 'alert-danger');
      return;
    };

    let files = Array.from(e.target.files)
    let allowedExtension = ['jpeg', 'jpg', 'png'];
    for (let i = 0; i < files.length; i++) {
      if(!allowedExtension.includes(e.target.files[0].name.split('.').pop().toLowerCase())){
        window.showAlert("only jpeg, jpg and png are allowed.", 'alert-danger');
        return;
      }}

    let length = files.length;
    if (length < 6) {
        for (let i = 0; i < length; i++){
            let fileReader = new FileReader();
            fileReader.onloadend = () => {
                this.setState({
                    imageFiles: [...this.state.imageFiles, files[i]],
                    imageUrls: [...this.state.imageUrls, fileReader.result]
                });
            };
            fileReader.readAsDataURL(files[i])
        }
    } else if (length > 5){
        for (let i = 0; i < 5; i++) {
            let fileReader = new FileReader();
            fileReader.onloadend = () => {
                this.setState({
                    imageFiles: [...this.state.imageFiles, files[i]],
                    imageUrls: [...this.state.imageUrls, fileReader.result]
                });
            };
            fileReader.readAsDataURL(files[i])
        }
    } else {
        window.showAlert("maximum number of images 5", 'alert-danger');
        return;
    };
};

  handleRemoveImage(url, file){
    let allUrls = this.state.imageUrls;  
    this.state.imageUrls.forEach((itr,i) => { 
      if (itr == url) {
        allUrls.splice(i, 1)
      }  
    });
  
    let allFiles = this.state.imageFiles;
    this.state.imageFiles.forEach((itr,i) => { 
      if (itr == file) {
        allFiles.splice(i, 1)
      }  
    });
    this.setState({
      imageFiles: [...allFiles],
      imageUrls: [...allUrls]
  });
    
  }

  validForm(){
    let title = this.state.title;
    if(!title || title.trim().length == 0){
      window.showAlert('title is require field', 'alert-danger');
      return false;
    }
    let description = this.state.description;
    if(!description || description.trim().length == 0){
      window.showAlert('description is require field', 'alert-danger');
      return false;
    }
    let price = this.state.price;
    if(!price || price.trim().length == 0 || price == 0){
      window.showAlert('price must be number greater than zero.', 'alert-danger');
      return false;
    }

    let gender_id = this.state.gender_id;
    if(!gender_id || gender_id == ''){
      window.showAlert('please select gender', 'alert-danger');
      return false;
    }
    let brand_id = this.state.brand_id;
    if(!brand_id || brand_id == ''){
      window.showAlert('please select brand', 'alert-danger');
      return false;
    }
    let color_id = this.state.color_id;
    if(!color_id || color_id == ''){
      window.showAlert('please select color', 'alert-danger');
      return false;
    }
    return true
  }

  handleSubmit(e){
    e.preventDefault();
    $('#spinner1').css('visibility', 'visible');

    if(!this.validForm()){ return; }
    const formData = new FormData();
    formData.append('item[title]', this.state.title);
    formData.append('item[description]', this.state.description);
    formData.append('item[price]', this.state.price);
    formData.append('item[gender_id]', this.state.gender_id);
    formData.append('item[brand_id]', this.state.brand_id);
    formData.append('item[color_id]', this.state.color_id);
    let {imageFiles} = this.state;
    if (imageFiles.length > 0) {
        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('item[photos][]', imageFiles[i]);
        }
    }
     this.props.createItem(formData)
    .then((res) => {this.props.history.push(`/items/${res.payload.item.id}`)})
    .then(window.showAlert('item has been added successfully. redirecting to item page...', 'alert-success'))
  }

  render(){
    if(this.state.loading){return <Loader/>;}

    return(
      <div className="container text-white">
        <div className="card bg-dark create-new-item-card">
          <div className="card-header text-warning">
          <i className="fas fa-check-square"></i>
          <span>&nbsp;create new item&nbsp;&nbsp;</span>

          <div id="spinner1" className=" hidden spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>

            </div>
        <form id="frmCreateItem" data-toggle="validator"  onSubmit={this.handleSubmit} className='card-body'>
            <div className="form-group">
              <label htmlFor="item_title">title</label>
              <input type="text" className="form-control" id="item_title" 
              onChange={this.update('title')} value={this.state.title} required
              aria-describedby="item title" placeholder="title..."/>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="item_brand">brand</label>
                <Select id="item_brand" options={brandsJson} className="text-dark"
                 onChange={opt => this.setState({brand_id: opt.value})} required/>
              </div>
              <div className="col">
                <label htmlFor="item_color">color</label>
                <Select id="item_color" options={colorJson} className="text-dark" 
                onChange={opt => this.setState({color_id: opt.value})} required/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="item_gender">sex</label>
                <Select id="item_gender" options={gendersJson} className="text-dark" 
                onChange={opt => this.setState({gender_id: opt.value})} required/>
              </div>
              <div className="col">
              <label htmlFor="item_price">sales price</label>
              <div className="input-group">
                <input type="number" className="form-control" id="item_price" 
                onChange={this.update('price')} value={this.state.price} required
                aria-describedby="item price" placeholder="$000.00"/>
              </div>
              </div>
            </div>
             
            <div className="form-group">
              <label htmlFor="item_description">description</label>
              <textarea id="item_description" className="form-control" id="item_description" placeholder="description..."
               onChange={this.update('description')} value={this.state.description} >
              </textarea>
          </div>

          <div className="form-group">
            <input type="file" className="form-control-file" id='input_file'
            onChange={this.uploadMultipleFiles} multiple />
                <small id="imagesHelp" className="form-text text-info">{"uploaded " + this.state.imageUrls.length + " of 5 photos."}</small>
          </div>
          <div className="form-group multi-preview row image-create-product-wrapper-container">
            {(this.state.imageUrls).map((url, i) => {
              let file = this.state.imageFiles[i];
              return(<div className="col-2 clear-padding image-create-product-wrapper" key={uuid()}>
                <a className="close-create-product-image cursor-pointer" onClick={()=>this.handleRemoveImage(url, file)}>
                <i className="far fa-window-close close-create-product-image text-danger"></i>
                </a>
                <img className="image-create-product" src={url} alt="..." />
              </div>)
              })}
          </div>
          <div className="form-group text-right">
            <button type="submit" className="btn btn-warning">Create Item</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
export default ItemForm;