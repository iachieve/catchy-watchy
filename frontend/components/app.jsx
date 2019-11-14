import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import ItemsListContainer from './items/items_container'
import ItemDetailsContainer from './items_details/items_details_container'
import Footer from './footer/footer'
export default () => (
  <div className="full_page">
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />

    <Switch>
      <ProtectedRoute path="/items/:itemId" component={ItemDetailsContainer} />
      <ProtectedRoute path="/items" component={ItemsListContainer} />
    </Switch>
    <Route component={Footer}/>
  </div>
);