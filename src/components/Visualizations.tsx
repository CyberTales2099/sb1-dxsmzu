import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box } from '@mui/material';
import * as d3 from 'd3';

const Visualizations: React.FC = () => {
  const radarChartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (radarChartRef.current) {
      const svg = d3.select(radarChartRef.current);
      svg.selectAll("*").remove(); // Clear previous content

      const width = 400;
      const height = 400;
      const margin = 40;

      const data = [
        { skill: "Python", value: 0.9 },
        { skill: "TensorFlow", value: 0.8 },
        { skill: "PyTorch", value: 0.7 },
        { skill: "NLP", value: 0.85 },
        { skill: "Computer Vision", value: 0.75 }
      ];

      const radialScale = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width / 2 - margin]);

      const angleScale = d3.scalePoint()
        .domain(data.map(d => d.skill))
        .range([0, 2 * Math.PI]);

      svg.attr("width", width)
         .attr("height", height);

      const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      // Draw axis lines
      data.forEach(d => {
        const angle = angleScale(d.skill)!;
        const line = d3.lineRadial<[number, number]>()
          .angle(d => d[0])
          .radius(d => d[1]);

        g.append("path")
          .datum([[angle, 0], [angle, radialScale(1)]])
          .attr("d", line)
          .attr("stroke", "gray")
          .attr("fill", "none");

        g.append("text")
          .attr("x", radialScale(1.1) * Math.sin(angle))
          .attr("y", -radialScale(1.1) * Math.cos(angle))
          .attr("text-anchor", "middle")
          .attr("dy", "0.35em")
          .text(d.skill)
          .attr("fill", "white");
      });

      // Draw concentric circles
      [0.25, 0.5, 0.75, 1].forEach(r => {
        g.append("circle")
          .attr("r", radialScale(r))
          .attr("fill", "none")
          .attr("stroke", "gray");
      });

      // Plot data points
      const line = d3.lineRadial<typeof data[0]>()
        .angle(d => angleScale(d.skill)!)
        .radius(d => radialScale(d.value))
        .curve(d3.curveLinearClosed);

      g.append("path")
        .datum(data)
        .attr("d", line)
        .attr("stroke", "#50e3c2")
        .attr("fill", "#50e3c2")
        .attr("fill-opacity", 0.3);
    }
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Data Visualizations
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <svg ref={radarChartRef}></svg>
        </Box>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Example: Radar chart visualizing a candidate's skills in Python, TensorFlow, PyTorch, NLP, and Computer Vision.
        </Typography>
      </Container>
    </Box>
  );
};

export default Visualizations;