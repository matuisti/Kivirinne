import axios from 'axios';

export default class QueryFunctions {

  login(username, password) {
    return axios.post('/users/login', {
      email: username,
      password: password
    })
    .then(function (response) {
      localStorage.setItem('jwt-token', response.data.token);
      return Promise.resolve(response);
    });
  }

  getDhtData(token, interval, intervalformat) {
    return axios.get('/api/get/dht', {
      params: {
        interval: interval,
        intervalformat: intervalformat
      },
      headers: {
        token: `${token}`
      }
    })
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.error(error);
      return Promise.reject(error);
    })
  }

  getCurrentSensordata(token) {
    return axios.get('/api/get/currentsensordata', {
      headers: {
        token: `${token}`
      }
    })
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.error(error);
      return Promise.reject(error);
    })
  }
}
