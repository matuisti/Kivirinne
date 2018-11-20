import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AuthenticatedComponent from './pages/AuthenticatedComponent';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <AuthenticatedComponent>
            <Route exact path='/home' component={Home}/>
          </AuthenticatedComponent>
        </Switch>
      </div>
    );
  }
}

export default App;
