import React, { ReactElement, useEffect } from "react";
import * as d3 from "d3";
import { aggregateData } from "../utils";

interface RollData {
  value: number;
  count: number;
}

// https://medium.com/react-courses/drawing-basic-charts-with-react-typescript-d3-part-i-line-area-and-bar-charts-cd159c62e18c

function BarChart(props: { rolls: number[] }): ReactElement {
  useEffect(() => {
    drawChart();
  });
  const drawChart = () => {
    const data = aggregateData(props.rolls);
    const width = 800 - 50 - 50; // width - left - right
    const height = 400 - 10 - 50; // height - top - bottom
    const x = d3.scaleBand().range([0, width]).padding(0.8);
    const y = d3.scaleLinear().range([height, 0]);
    const svg = d3
      .select("#bar-chart")
      .attr("width", width + 50 + 50)
      .attr("height", 400 + 10 + 50)
      .append("g")
      .attr("transform", `translate(${50},${10})`);
    x.domain(data.map((d) => d.value.toString()));
    y.domain([
      0,
      d3.max(data, () => {
        return Math.max(...data.map((dt) => (dt as RollData).count), 0);
      }),
    ] as number[]);
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", "#a3be8c")
      .attr("class", "bar")
      .attr("x", (d) => x(d.value.toString()) || 0)
      .attr("width", x.bandwidth())
      .attr("y", (d) => {
        return y(d.count) || d.count;
      })
      .attr("height", (d) => {
        return height - (y(d.value) || d.value);
      });
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
  };
  return (
    <div>
      <svg id="bar-chart"></svg>
    </div>
  );
}

export default BarChart;
