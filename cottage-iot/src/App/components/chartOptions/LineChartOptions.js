import Highcharts from 'highcharts/highstock';

function lineChartOptions(params) {

  const options = {
    chart: {
      zoomType: 'x',
      resetZoomButton: {
        position: {
          align: 'right',
          x: 0,
          y: -15
        },
        theme: {
          fill: 'white',
          stroke: 'silver',
          r: 5,
          states: {

            hover: {
              fill: '#EEEEEE',
              style: {
                color: 'black',
              }
            }
          }
        }
      }
    },
    title: {
      text: params.title,
      align: 'left',
      margin: 0,
      x: 30
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%e. %b',
        week: '%e. %b',
        month: '%b \'%y',
        year: '%Y'
      }
    },
    navigator: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttonTheme: {
        visibility: 'hidden'
      },
      labelStyle: {
        visibility: 'hidden'
      }
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [
              0, Highcharts.getOptions().colors[0]
            ],
            [
              1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')
            ]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: params.data
    // series: [{
    //   type: 'area',
    //   showInLegend: false,
    //   name: "Kosteus", // Example lämpötila
    //   data: params.data // Dataset
    // }]
  };
  return options;
}

function pieChartOptions(params) {
  const options = {
    chart: {
      zoomType: 'x',
      resetZoomButton: {
        position: {
          align: 'right',
          x: 0,
          y: -15
        },
        theme: {
          fill: 'white',
          stroke: 'silver',
          r: 5,
          states: {

            hover: {
              fill: '#EEEEEE',
              style: {
                color: 'black',
              }
            }
          }
        }
      }
    },
    title: {
      text: params.title,
      align: 'left',
      margin: 0,
      x: 30
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%e. %b',
        week: '%e. %b',
        month: '%b \'%y',
        year: '%Y'
      }
    },
    navigator: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttonTheme: {
        visibility: 'hidden'
      },
      labelStyle: {
        visibility: 'hidden'
      }
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [
              0, Highcharts.getOptions().colors[0]
            ],
            [
              1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')
            ]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: params.data
    // series: [{
    //   type: 'area',
    //   showInLegend: false,
    //   name: "Kosteus", // Example lämpötila
    //   data: params.data // Dataset
    // }]
  };
  return options;
}

export {
  lineChartOptions,
  pieChartOptions
};
