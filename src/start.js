import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './app'
import Register from './register'
import Welcome from './welcome'
import Login from './login'
import SingleProductView from './SingleProductView'
import UploadProduct from './uploadProduct'
import ProductList from './productList'

const notLoggedIn = (
    <Router history={hashHistory}>
    <Route path="/" component={Welcome}>
        <Route path="/login" component={Login} />
            <IndexRoute component={Register} />
        </Route>
    </Router>
)

const loggedIn = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ProductList} />
            <Route path='/products/:id' component={SingleProductView} />
            <Route path='/uploadProduct' component={UploadProduct} />
        </Route>
    </Router>
)

let router = location.pathname === '/welcome' ? notLoggedIn : loggedIn;


ReactDOM.render(
  router,
  document.getElementById('main')
);
