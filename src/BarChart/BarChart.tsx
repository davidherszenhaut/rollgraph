import React, { ReactElement } from "react";
import { aggregateData } from "../utils";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function BarChart(props: { rolls: number[] }): ReactElement {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Bar Chart'
    },
    series: [{
      data: aggregateData(props.rolls).map(Object.values),
    }],
    colors: ['#8fbcbb', '#88c0d0', '#81a1c1', '#5e81ac', '#fb616a', '#d08770', '#ebcb8b', '#a3be8c', '#b48ead'],
    plotOptions: {
      column: {
        colorByPoint: true
      }
    }
  };

  console.log(aggregateData(props.rolls));

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default BarChart;
