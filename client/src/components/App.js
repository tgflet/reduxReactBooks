import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import '../App.css';
import Splash from './Splash';
import Header from './Header';
import BookList from './books/BookList'
import Login from './users/Login';
import Register from './users/Register';
import UpdateUser from './users/UpdateUser';


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
            <Route path = '/register' exact component = {Register}/>
            <Route path = '/profile/update/:id' exact component = {UpdateUser}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
