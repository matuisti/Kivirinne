import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import AuthenticatedComponent from './pages/AuthenticatedComponent';
import Home from './pages/Home';
import Login from './pages/Login';
import Camera from './pages/Camera';
import Sensors from './pages/Sensors';
import Dashboard from './pages/Dashboard';
import Power from './pages/Power';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/login' component={Login}/>
          <AuthenticatedComponent>
            <SideBar/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/camera' component={Camera}/>
            <Route exact path='/sensors' component={Sensors}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/power' component={Power}/>
          </AuthenticatedComponent>
        </Switch>
      </div>
    );
  }
}

export default App;
