import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Authentication/AuthService';
import axios from 'axios';
import './ChartStyles.css';
import { lineChartOptions, pieChartOptions } from './chartOptions/LineChartOptions.js';
import Highcharts from 'highcharts/highstock';

class LineChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartOptions: null
    }
  }

  async componentDidMount() {
    this.state.chartOptions = lineChartOptions(this.props);
    Highcharts.setOptions({
      lang: {
        months: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Keäskuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
        weekdays: ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'],
        shortMonths: ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syy', 'Lok', 'Mar', 'Jou'],
        resetZoom: "Nollaa zoom"
      },
    });
    this.state.chartOptions.chart = new Highcharts[this.props.type || "Chart"](
      this.props.container,
      this.state.chartOptions
    );
  }

  componentWillUnmount() {
    this.state.chartOptions.chart.destroy();
  }

  render() {
    return (
      <div className="line-chart-body">
        <div className="line-chart-wrapper" key={this.props.key} id={this.props.container}></div>
      </div>
    );
  }
}

export default LineChart;
