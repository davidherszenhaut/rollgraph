import React, { ReactElement } from "react";
import { aggregateData } from "../utils";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./BarChart.css";

function BarChart(props: { rolls: number[] }): ReactElement {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "#2e3440",
      width: 500,
    },
    title: {
      text: "",
    },
    series: [
      {
        showInLegend: false,
        data: aggregateData(props.rolls).map(Object.values),
      },
    ],
    colors: [
      "#8fbcbb",
      "#88c0d0",
      "#81a1c1",
      "#5e81ac",
      "#fb616a",
      "#d08770",
      "#ebcb8b",
      "#a3be8c",
      "#b48ead",
    ],
    plotOptions: {
      column: {
        colorByPoint: true,
      },
    },
    tooltip: {
      enabled: false,
    },
    xAxis: {
      tickColor: "#eceff4",
      labels: {
        style: {
          color: "#eceff4",
        },
      },
    },
    yAxis: {
      title: {
        enabled: false,
      },
      allowDecimals: false,
      tickColor: "#eceff4",
      labels: {
        style: {
          color: "#eceff4",
        },
      },
    },
    credits: {
      enabled: false,
    },
  };

  console.log(aggregateData(props.rolls));

  return (
    <div id="bar-chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default BarChart;
