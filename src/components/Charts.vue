<template>
    <div>
        <!-- Chart 컴포넌트 포함 -->
        <PriceRange ref="PriceRange" :filteredData="filteredData" />
            <br>
            <br>
            <br>
        <FilterPrice ref="FilterPrice" :filteredData="filteredData" />
            <br>
            <br>
            <br>
        <ColorLikes ref="ColorLikes" :filteredData="filteredData" />
            <br>
            <br>
            <br>
        <PriceLikes ref="PriceLikes" :filteredData="filteredData" />
    </div>
</template>
<script>
import PriceRange from '@/components/charts/priceRange.vue';
import FilterPrice from '@/components/charts/filterPrice.vue';
import ColorLikes from '@/components/charts/colorLikes.vue';
import PriceLikes from '@/components/charts/priceLikes.vue';

export default {
    name: "Chart",
    data() {
        return {

        }
    },
    props: {
        filteredData: Array,
    },
    components: {
        PriceLikes,
        ColorLikes,
        FilterPrice,
        PriceRange,
    },
    watch: {
        filteredData(newData) {
        // filteredData가 변경될 때마다 차트를 다시 그리거나 갱신하는 로직
            this.$nextTick(() => {
                const chartComponents = [
                    this.$refs.PriceRange,
                    this.$refs.PriceLikes,
                    this.$refs.FilterPrice,
                    this.$refs.ColorLikes,
                ];

                chartComponents.forEach((chart) => {
                    if (chart && typeof chart.updateChart === 'function') {
                    chart.updateChart(newData);
                    }
                });
            });
        }
    },
}
</script>