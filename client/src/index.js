import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import App from './components/App';
import Welcome from './components/welcome';
import About from './components/about';
import Signin from './components/authComp/signin';
import Signout from './components/authComp/signout';
import Signup from './components/authComp/signup';
import StockPile from './components/stockpile';
import RequireAuth from './components/authComp/require_auth';
import noRequireAuth from './components/authComp/authroutes';
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

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
    <Switch>
      <Route exact path="/"  component={App}/>
      <Route path="/signin" component={noRequireAuth(Signin)} />  
      <Route path="/signup" component={noRequireAuth(Signup)} />  
      
      {/* <Route path="/stockpile" component={StockPile} /> */}
      <Route path="/signout" component={RequireAuth(Signout)} /> 
      <Route path="/stockpile" component={RequireAuth(StockPile)} />  
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
