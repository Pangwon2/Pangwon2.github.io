<template>
    <div ref="chart" class="chart"></div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: 'PriceLikesScatterPlot',
    props: {
      filteredData: Array,
    },
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        const margin = { top: 20, right: 20, bottom: 40, left: 40 };
        const width = 600 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;
  
        const svg = d3
          .select(this.$refs.chart)
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
  
        // X, Y 축 설정
        const x = d3.scaleLinear().domain([0, d3.max(this.filteredData, d => d.price)]).range([0, width]);
        const minY = Math.min(20, d3.min(this.filteredData, d => d.likes));
        const maxY = Math.max(140, d3.max(this.filteredData, d => d.likes));
        const y = d3.scaleLinear().domain([minY, maxY]).range([height, 0]);
  
        // 산점도 (Scatter Plot) 만들기
        svg
          .selectAll('circle')
          .data(this.filteredData)
          .enter()
          .append('circle')
          .attr('cx', (d) => x(d.price))
          .attr('cy', (d) => y(d.likes))
          .attr('r', 5)
          .style('fill', 'steelblue');
  
        // X축 추가
        svg
          .append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x).tickFormat(d3.format('.0f')));
  
        // Y축 추가
        svg
          .append('g')
          .call(d3.axisLeft(y).ticks(5));
  
        // 제목 추가
        svg
          .append('text')
          .attr('x', width / 2)
          .attr('y', margin.top / 2)
          .attr('text-anchor', 'middle')
          .attr('font-size', '16px')
          .attr('font-weight', 'bold')
          .text('가격 별 좋아요 수');
  
        
      },
    },
  };
  </script>
  
  <style scoped>
  .chart {
    width: 100%;
    height: 300px;
  }
  </style>
  