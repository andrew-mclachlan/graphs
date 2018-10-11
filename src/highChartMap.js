import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HC_map from 'highcharts/modules/map'
import HighchartsReact from 'highcharts-react-official'
const data = require('./europe');

// init the module
HC_map(Highcharts)

// instead of import + init you could use require as:
// require('highcharts/modules/map')(Highcharts)
// the same applies to any other Highcharts module

const options = {
    chart: {
        map: data,
        borderWidth: 1
    },

    title: {
        text: 'A Map'
    },

    subtitle: {
        text: ''
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Country',
        data: [
            ['is', 1],
            ['no', 1],
            ['se', 1],
            ['dk', 1],
            ['fi', 1],
            ['gb', 1]
        ],
        dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            formatter: function () {
                if (this.point.value) {
                    return this.point.name;
                }
            }
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '{point.name}'
        }
    }]
}

class HighChartMap extends Component {
    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'mapChart'}
                options={options}
            />
        );
    }
};

export default HighChartMap;