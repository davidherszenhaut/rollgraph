import React, { ReactElement } from "react";
import * as d3 from "d3";
import { aggregateData } from "../utils";

// interface RollData {
//   value: number;
//   count: number;
// }

function BarChart(props: { rolls: number[] }): ReactElement {
  const data = aggregateData(props.rolls);
  const width = 500;
  const height = 500;
  const margin = { top: 30, right: 0, bottom: 30, left: 40 };

  const color = "steelblue";
  const x = d3
    .scaleBand()
    .domain(data.map((x) => x.value.toString()))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.count)] as number[])
    .nice()
    .range([height - margin.bottom, margin.top]);
  // function xAxis(g) {
  //   return g.attr("transform", `translate(0,${height - margin.bottom})`).call(
  //     d3
  //       .axisBottom(x)
  //       .tickFormat((i) => data[i].value)
  //       .tickSizeOuter(0)
  //   );
  // }
  // function yAxis(g) {
  //   return g
  //     .attr("transform", `translate(${margin.left},0)`)
  //     .call(d3.axisLeft(y).ticks(null))
  //     .call((g) => g.select(".domain").remove())
  //     .call((g) =>
  //       g
  //         .append("text")
  //         .attr("x", -margin.left)
  //         .attr("y", 10)
  //         .attr("fill", "currentColor")
  //         .attr("text-anchor", "start")
  //         .text(data.y)
  //     );
  // }

  function drawChart() {
    const svg = d3
      .select("#bar-chart")
      .attr("viewBox", `${[0, 0, width, height]}`);
    svg
      .append("g")
      .attr("fill", color)
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i.toString()) || 0)
      .attr("y", (d) => y(d.count) || 0)
      .attr("height", (d) => y(d.count) || 0)
      .attr("width", x.bandwidth());
    svg.append("g").call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
    return svg.node();
  }

  drawChart();

  return (
    <div>
      <svg height={height} width={width} id="bar-chart"></svg>
    </div>
  );
}

export default BarChart;
