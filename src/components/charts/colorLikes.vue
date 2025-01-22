<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'ColorChart',
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
            .text('색 별 좋아요');

      // color별로 데이터를 그룹화
      const colorGrouped = d3.group(this.filteredData, (d) => d.color);

      // 각 그룹 내에서 평균 likes 계산
      const colorAverages = Array.from(colorGrouped, ([key, values]) => ({
        color: key,
        averageLikes: d3.mean(values, (d) => d.likes),
      }));

      // X축, Y축 설정
      const x = d3
        .scaleBand()
        .domain(colorAverages.map((d) => d.color))
        .range([0, width])
        .padding(0.1);

      //80또는 최소값 이상
      const minY = Math.min(80, d3.min(colorAverages, (d) => d.averageLikes));
      
      const y = d3.scaleLinear()
        .domain([minY, d3.max(colorAverages, (d) => d.averageLikes)])
        .nice()
        .range([height, 0]);

      // 막대 차트 그리기
      svg
        .selectAll('.bar')
        .data(colorAverages)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.color))
        .attr('y', (d) => y(d.averageLikes))
        .attr('width', x.bandwidth())
        .attr('height', (d) => height - y(d.averageLikes))
        .style('fill', 'green');

      // X축, Y축 추가
      svg
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y).ticks(10));
    },
    // 차트를 업데이트하는 메서드
    updateChart(filteredData) {
        // 차트를 비우고 새로 그리는 방식
        d3.select(this.$refs.chart).selectAll("*").remove();  // 기존 차트 지우기
        this.createChart(filteredData); // 새로운 filteredData로 차트 그리기
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
