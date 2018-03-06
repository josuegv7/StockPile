import 'font-awesome/css/font-awesome.min.css';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import './index.css';



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/welcome';
import Signin from './components/authComp/signin';
import Signout from './components/authComp/signout';
import Signup from './components/authComp/signup';
import StockPile from './components/stockpile';
import NewFood from './components/add_food';
import Pot from './components/pot';
import RequireAuth from './components/authComp/require_auth';
import Reducer from 'redux-form/lib/reducer';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// if we have a token, consider the user to be signed in 
if (token) {
  // need to update the application state
  store.dispatch({ type: AUTH_USER });
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/signin" component={Signin} />  
      <Route path="/signout" component={Signout} /> 
      <Route path="/signup" component={Signup} />  
      <Route path="/stockpile" component={StockPile} />
      <Route path="/stockpile/add" component={NewFood} />
      <Route path="/pot" component={Pot} />
      <Route path="/welcome" component={Welcome} />
      {/* <Route path="stockpile" component={RequireAuth(StockPile)} />   */}
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
