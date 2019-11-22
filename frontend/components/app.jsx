import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import ItemsListContainer from './items/items_container'
import ItemDetailsContainer from './items_details/items_details_container'
import Footer from './footer/footer'
import CartFormContainer from './cart/cart_index_container'
import CreateItemContainer from './item_form/create_item_container'
import FavoritesContainer from './favorites/favorites_container'


export default () => (
  <div className="full_page">
    <NavBarContainer/>
    <Route path="/" exact component={ItemsListContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <Switch>
    <ProtectedRoute path='/createItem' component={CreateItemContainer}/>
    <ProtectedRoute path='/favorites' component={FavoritesContainer}/>
      {/* <Route path="/" component={ItemsListContainer} /> */}
      <Route path="/items/:itemId" component={ItemDetailsContainer} />
      <ProtectedRoute path="/cartItems" component={CartFormContainer} />
    </Switch>
    <Route component={Footer}/>
  </div>
);