import React, { ReactElement } from "react";
import * as d3 from "d3";
import { PieArcDatum } from "d3-shape";
import { aggregateData } from "../utils";

interface TempData {
  value: number;
  count: number;
}

function PieChart(props: { rolls: number[] }): ReactElement {
  const data = aggregateData(props.rolls);
  const width = 500;
  const height = 500;

  const pie = d3
    .pie<TempData>()
    .sort(null)
    .value((d) => d.count);
  const arc = d3
    .arc<PieArcDatum<TempData>>()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1);
  const color = d3
    .scaleOrdinal<string, string>()
    .domain(data.map((d) => d.value.toString()))
    .range(
      d3
        .quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
        .reverse()
    );
  const radius = (Math.min(width, height) / 2) * 0.8;
  const arcLabel = d3
    .arc<PieArcDatum<TempData>>()
    .innerRadius(radius)
    .outerRadius(radius);

  function chart() {
    const arcs = pie(data);
    const svg = d3
      .select("#pie-chart")
      .attr("viewBox", `${[-width / 2, -height / 2, width, height]}`);
    svg
      .append("g")
      .attr("stroke", "white")
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", (d) => color(d.data.value.toString()))
      .attr("d", arc)
      .append("title")
      .text((d) => `${d.data.value.toString()}: ${d.data.count.toString()}`);
    svg
      .append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", "12")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(arcs)
      .join("text")
      .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
      .call((text) =>
        text
          .append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text((d) => d.data.value.toString())
          .call((text) =>
            text
              .filter((d) => d.endAngle - d.startAngle > 0.25)
              .append("tspan")
              .attr("x", 0)
              .attr("y", "0.7em")
              .attr("fill-opacity", 0.7)
              .text((d) => d.data.count.toString())
          )
      );
    return svg.node();
  }

  chart();

  return (
    <div>
      <svg height={height} width={width} id="pie-chart"></svg>
    </div>
  );
}

export default PieChart;
