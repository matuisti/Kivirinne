import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AuthService from '../Authentication/AuthService';
import QueryFunctions from '../components/QueryFunctions';
import './styles/Camera.css';
import Highcharts from 'highcharts/highstock';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
    }
  }

  componentDidMount() {
    var token = this.Auth.getToken();
  }

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Sensorit</h1>
      </div>
    );
  }
}

export default Camera;
