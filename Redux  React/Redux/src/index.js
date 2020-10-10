import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import './index.css';

import DefaultLayout from './layout/DefaultLayout';
import LoginLayout from './layout/LoginLayout';
import Home from './Home';
import TodolistPage from './Todolist';
import Products from './Products';
import Contact from './Contact';
import ProductDetail from './ProductDetail';
import Login from './Login';

import history from './history'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './Redux/Reducers/index';
const myStore = createStore(myReducer);
console.log('Log: myStore', myStore.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router history={history}>
        <Switch>
          <LoginLayout exact path="/login" component={Login} />

          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/about" component={TodolistPage} />
          <DefaultLayout exact path="/products" component={Products} />
          <DefaultLayout exact path="/contact" component={Contact} />
          <DefaultLayout exact path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
