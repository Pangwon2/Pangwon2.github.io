<template>
    <div ref="chart" class="chart"></div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: 'FilterChart',
    props: {
      filteredData: Array,
    },
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 600 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;
  
        const svg = d3
          .select(this.$refs.chart)
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        svg
            .append('text')
            .attr('x', width / 2) // 차트 가운데
            .attr('y', margin.top / 2) 
            .attr('text-anchor', 'middle')
            .attr('font-size', '16px')
            .attr('font-weight', 'bold')
            .text('용도 별 가격'); // 제목 내용
  
        // Filter별로 데이터를 그룹화
        const filterGrouped = d3.group(this.filteredData, (d) => d.filter);
  
        // 각 그룹별로 평균 price 계산
        const filterAverages = Array.from(filterGrouped, ([key, values]) => ({
          filter: key,
          averagePrice: (d3.mean(values, (d) => d.price))/1000,
        }));
  
        // X축, Y축 설정
        const x = d3
          .scaleBand()
          .domain(filterAverages.map((d) => d.filter))
          .range([0, width])
          .padding(0.1);
        
        const minY = Math.min(80, d3.min(filterAverages, (d) => d.averagePrice));
        const maxY = Math.max(d3.max(filterAverages, (d) => d.averagePrice), 120);
        
        const y = d3.scaleLinear()
          .domain([minY, maxY])
          .nice()
          .range([height, 0]);
  
        // 막대 차트 그리기
        svg
          .selectAll('.bar')
          .data(filterAverages)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', (d) => x(d.filter))
          .attr('y', (d) => y(d.averagePrice))
          .attr('width', x.bandwidth())
          .attr('height', (d) => height - y(d.averagePrice))
          .style('fill', 'orange');
  
        // X축, Y축 추가
        svg
          .append('g')
          .attr('class', 'x-axis')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x));
  
        svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y));

        svg
            .selectAll('.y-axis text')
            .text((d) => `${d}천`);
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
  