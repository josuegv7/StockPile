import "../style/index.css"
import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


import Landing from './Landing';
import Signin from './authComp/signin';
import Signout from './authComp/signout';
import Signup from './authComp/signup';
import StockPile from './stockpile';
import RequireAuth from './authComp/require_auth';
import noRequireAuth from './authComp/authroutes';



class App extends Component {
  render() {
    return (
        <div className='App'>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={noRequireAuth(Signin)} />
              <Route path="/signup" component={noRequireAuth(Signup)} />
              <Route path="/signout" component={RequireAuth(Signout)} />
              <Route exact path="/stockpile" component={RequireAuth(StockPile)} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App)
