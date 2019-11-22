import { connect } from "react-redux";
import ItemForm from "./item_form";
import { createItem } from '../../actions/items_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {    
    const item = {
      title: '',
      description: '',
      price: '',
      gender_id: '',
      brand_id: '',
      color_id: ''
     };
    const errors = state.errors.item;
    return {
      item,
      errors
    };
};

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(createItem(item))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemForm));