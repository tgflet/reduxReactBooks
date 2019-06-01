import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import '../App.css';
import Splash from './Splash';
import Header from './Header';
import BookList from './books/BookList'
import Login from './users/Login';


function App() {
  return (
    <div className="ui container">
      <Router history = {history}>
      <Header/>
        <div>
          <Switch>
            <Route path = '/' exact component = {Splash}/>
            <Route path = '/login' exact component = {Login}/>
            <Route path = '/books' exact component = {BookList}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
