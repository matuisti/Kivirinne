import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AuthService from '../Authentication/AuthService';
import QueryFunctions from '../components/QueryFunctions';
import LineChart from '../components/LineChart';
import Highcharts from 'highcharts/highstock';
import './styles/Dashboard.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

class Camera extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
      weekData1: [7.0, 6.9, 9.5, 18.5, 15.4, 21.5, 25.2, 16.5, 23.3, 18.3, 13.9, 9.6],
      weekData2: [0.0, 7.9, 5.5, 10.5, 18.4, 20.5, 15.2, 26.5, 15.3, 18.3, 10.9, 20.6],
      weekData3: [12.0, 13.9, 16.5, 7.5, 13.4, 25.5, 15.2, 20.5, 13.3, 28.3, 5.9, 4.6],
      lineLoad: false,
    }
  }

  componentDidMount() {
    var token = this.Auth.getToken();
    this.Query.getCurrentSensordata(token).then(response => {
      console.log(response.data);
      this.setState({
        lineLoad: true,
      })
    }).catch(error => {
      console.error(error);
    })

    this.Query.getWeatherForecast().then(response =>{
      console.log(response);
    })
  }

  render() {
    return (
      <div className="body">
        <Navbar/>
          <div className="plain-chart-row1">
            <div className="plain-chart-column plain">
              <div className="chart-text">
                <p>{this.state.weekData1[this.state.weekData1.length - 1]}</p>
                <p>Olohuone</p>
                <p><FontAwesomeIcon icon="temperature-high"/></p>
              </div>
              <div className="chart">
                {
                  !this.state.lineLoad
                    ? <div className="Graph-loader"/>
                  : <LineChart container="tempChart1" type="Chart" title="Sisäilma" base="plain" data={this.state.weekData1} />
                }
              </div>
            </div>
            <div className="plain-chart-column plain">
              <div className="chart-text">
                <p>{this.state.weekData2[this.state.weekData2.length - 1]}</p>
                <p>Eteinen</p>
                <p><FontAwesomeIcon icon="temperature-high"/></p>
              </div>
              <div className="chart">
                {
                  !this.state.lineLoad
                    ? <div className="Graph-loader"/>
                  : <LineChart container="tempChart2" type="Chart" title="Sisäilma" base="plain" data={this.state.weekData2} />
                }
              </div>
            </div>
            <div className="plain-chart-column plain">
              <div className="chart-text">
                <p>{this.state.weekData3[this.state.weekData3.length - 1]}</p>
                <p>Makuuhuone</p>
                <p><FontAwesomeIcon icon="temperature-high"/></p>
              </div>
              <div className="chart">
                {
                  !this.state.lineLoad
                    ? <div className="Graph-loader"/>
                  : <LineChart container="tempChart3" type="Chart" title="Sisäilma" base="plain" data={this.state.weekData3} />
                }
              </div>
            </div>
          </div>
          <div className="plain-chart-row1">
            <div className="plain-chart-column plain">
              <div className="chart-text">
                <p>{this.state.weekData1[this.state.weekData1.length - 1]}</p>
                <p>Olohuone</p>
                <p><FontAwesomeIcon icon="tint"/></p>
              </div>
              <div className="chart">
                {
                  !this.state.lineLoad
                    ? <div className="Graph-loader"/>
                  : <LineChart container="humidityChart1" type="Chart" title="Sisäilma" base="plain" data={this.state.weekData1} />
                }
              </div>
            </div>
            <div className="plain-chart-column plain">
              <div className="chart-text">
                <p>{this.state.weekData2[this.state.weekData2.length - 1]}</p>
                <p>Eteinen</p>
                <p><FontAwesomeIcon icon="tint"/></p>
              </div>
              <div className="chart">
                {
                  !this.state.lineLoad
                    ? <div className="Graph-loader"/>
                  : <LineChart container="humidityChart2" type="Chart" title="Sisäilma" base="plain" data={this.state.weekData2} />
                }
              </div>
            </div>
            <div className="plain-chart-column plain">
              <div className="chart-text">
                <p>{this.state.weekData3[this.state.weekData3.length - 1]}</p>
                <p>Makuuhuone</p>
                <p><FontAwesomeIcon icon="tint"/></p>
              </div>
              <div className="chart">
                {
                  !this.state.lineLoad
                    ? <div className="Graph-loader"/>
                  : <LineChart container="humidityChart3" type="Chart" title="Sisäilma" base="plain" data={this.state.weekData3} />
                }
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Camera;
