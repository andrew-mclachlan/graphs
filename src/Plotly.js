import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PlotlyBar extends Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 800, height: 600, title: 'A Fancy Plot'} }
      />
      );
    }
  }

class PlotlyScatter extends Component {
  render() {
    return (
      <Plot
      data={[
        {
          x: [1, 2, 3, 4], 
          y: [10, 15, 13, 17], 
          type: 'scatter'
        },
        {
          x: [1, 2, 3, 4], 
          y: [16, 5, 11, 9], 
          type: 'scatter'
        },
      ]}
      layout={ {rangemode: 'tozero', showline: true, zeroline: true}
      }
      />
    );
  }
}

export {
  PlotlyBar,
  PlotlyScatter,
}