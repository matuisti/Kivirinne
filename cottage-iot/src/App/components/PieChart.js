import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import SolidGauge from 'highcharts/modules/solid-gauge';
import { lineChartOptions, gaugeChartOptions } from './chartOptions/LineChartOptions.js';
import './ChartStyles.css';

class PieChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartOptions: null
    }
  }

  async componentDidMount() {
    this.state.chartOptions = gaugeChartOptions(this.props);
    Highcharts.setOptions({
      lang: {
        months: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Keäskuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
        weekdays: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
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
      <div className="pie-chart-body">
        <div className="pie-chart-wrapper" key={this.props.key} id={this.props.container}></div>
      </div>
    );
  }
}

export default PieChart;
