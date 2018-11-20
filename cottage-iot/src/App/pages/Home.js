import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import AuthService from '../Authentication/AuthService';
import QueryFunctions from '../components/QueryFunctions';
import moment from 'moment';
import axios from 'axios';
import './Home.css';
import Highcharts from 'highcharts/highstock';

class Home extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
      lineLoad: false,
      pieLoad: false,
      dhtData: null,
      test: null,
      pieData: null,
    }
  }


  async initLineChart(token) {
    this.Query.getDhtData(token, 1, 'YEAR').then(response => {
      //console.log(response.data)
      var mm = response.data.data.map(x => [
        moment.utc(x.time).valueOf(),
        x.temperature
      ])

      var keys = Object.keys(response.data.data[0]);
      console.log(keys);
      var match = ["temperature", "humidity"];
      var colors = ['RGB(250, 128, 114)', 'RGB(93, 173, 226)']
      var arr = [];
      match.forEach((key, index) => {
        var val1 = response.data.data.map(item => {
          return [moment.utc(item.time).valueOf(), item[match[index]]];
        });
        arr[index] = {
          name: match[index],
          data: val1,
          color: colors[index],
          type: 'pie',
          lineWidth: 2.5,
        };
      });

      console.log(arr);
      this.setState({dhtData: response.data, test: arr, lineLoad: true})
    })
  }

  async initPieChart(token) {
    this.Query.getDhtData(token, 1, 'MONTH').then(response => {
      //console.log(response.data)
      var mm = response.data.data.map(x => [
        moment.utc(x.time).valueOf(),
        x.temperature
      ])

      var keys = Object.keys(response.data.data[0]);
      console.log(keys);
      var match = ["temperature", "humidity"];
      var colors = ['RGB(250, 128, 114)', 'RGB(93, 173, 226)']
      var arr = [];
      match.forEach((key, index) => {
        var val1 = response.data.data.map(item => {
          return [moment.utc(item.time).valueOf(), item[match[index]]];
        });
        arr[index] = {
          name: match[index],
          data: val1,
          color: colors[index],
          type: 'spline',
          lineWidth: 2.5,
        };
      });

      console.log(arr);
      this.setState({pieData: arr, pieLoad: true})
    })
  }


  async componentDidMount() {
    var token = this.Auth.getToken();
    this.initLineChart(token);
    this.initPieChart(token);
  }

  render() {
    return (<div className="body">
      <Navbar/>
      <div className="chart-row1">
        <div className="chart-column middle">
          <div className="chart">
            {
              !this.state.lineLoad
                ? <div className="Graph-loader"/>
              : <LineChart container="lineChart" type="Chart" title="Sisäilma" data={this.state.test} />
            }
          </div>
        </div>
        <div className="chart-column side">
          <div className="chart">
            {
              !this.state.pieLoad
                ? <div className="Graph-loader"/>
              : <PieChart container="lineCharts" type="Chart" title="Sisäilma" data={this.state.pieData} />
            }
          </div>
        </div>
      </div>
      <div className="chart-row2">
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
      </div>
      <div className="chart-row2">
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
      </div>
      <div className="chart-row2">
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
      </div>
    </div>);
  }
}
export default Home;
