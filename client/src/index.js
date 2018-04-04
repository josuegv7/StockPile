import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import App from './components/App';

import Signin from './components/authComp/signin';
import Signout from './components/authComp/signout';
import Signup from './components/authComp/signup';
import StockPile from './components/stockpile';
import RequireAuth from './components/authComp/require_auth';
// import noRequireAuth from './components/authComp/authroutes';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// With a token the user is signed in:
if (token) {
  // To update the application state:
  store.dispatch({ type: AUTH_USER });
};


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/signin" component={Signin} />  
      <Route path="/signup" component={Signup} />  
      <Route path="/signout" component={Signout} /> 
      <Route path="/stockpile" component={RequireAuth(StockPile)} />  
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
