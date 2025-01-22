// priceRangeChart.vue
<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'PriceRangeChart',
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
        .attr('y', margin.top / 2) // 위쪽에 배치
        .attr('text-anchor', 'middle')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .text('가격 별 좋아요'); // 제목 내용

      // Price Range 만들기
      const priceRange = [0, 25, 50, 75, 100, 125, 150, 175, 200];

      // Price Range에 따른 평균 likes 계산
      const priceGrouped = priceRange.slice(0, priceRange.length - 1).map((range, index) => {
        const rangeData = this.filteredData.filter(
          (item) =>
            item.price >= range * 1000 && item.price < (priceRange[index + 1] || 200) * 1000
        );
        const avgLikes =
          rangeData.length > 0
            ? d3.mean(rangeData, (d) => d.likes)
            : 0;
        return { range: `${range}천 ~ ${priceRange[index + 1] || 200}천`, avgLikes };
      });

      // X축, Y축 설정
      const x = d3
        .scaleBand()
        .domain(priceGrouped.map((d) => d.range))
        .range([0, width])
        .padding(0.1);

      const minY = Math.min(40, d3.min(priceGrouped, (d) => d.avgLikes));
      const maxY = Math.min(120, d3.max(priceGrouped, (d) => d.avgLikes));
      const y = d3
        .scaleLinear()
        .domain([minY, maxY])
        .nice()
        .range([height, 0]);

      // 꺾은선 차트를 위한 선 정의
      const line = d3
        .line()
        .x((d) => x(d.range) + x.bandwidth() / 2) // x축 위치는 중간으로 설정
        .y((d) => y(d.avgLikes));

      // 꺾은선 그리기
      svg
        .append('path')
        .data([priceGrouped])
        .attr('class', 'line')
        .attr('d', line) // 선 데이터 적용
        .style('fill', 'none') // 선 내부는 채우지 않음
        .style('stroke', 'steelblue') // 선 색상
        .style('stroke-width', '2px');

      // 각 데이터 포인트에 점 표시
      svg
        .selectAll('.dot')
        .data(priceGrouped)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', (d) => x(d.range) + x.bandwidth() / 2) // x축 위치
        .attr('cy', (d) => y(d.avgLikes)) // y축 위치
        .attr('r', 4) // 점 크기
        .style('fill', 'steelblue');

      // X축, Y축 추가
      svg
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y));
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