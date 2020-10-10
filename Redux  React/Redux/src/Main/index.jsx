import React from 'react';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import todolist from '../TodoList';
import Products from '../Products';
import Contact from '../Contact';
import './styles.css';

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todolist" component={todolist} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Main;
