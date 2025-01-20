<template>
<div class="basketlist">
    <div v-for="(item, a) in basket" :key="a">
        <img :src="item.postImage" alt="Gallery Image" class="basketImg" @click="goToDetail(item)"/>
        <h4>{{ item.filter }}</h4>
        <h4>{{ item.color }}</h4>
        <h4>{{ item.price }}원</h4>
        <!-- 수량 변경 -->
      <input 
        type="number" 
        v-model="item.amount" 
        min="1" 
        class="amount-input"
        @blur="updateAmount(item)"
      />
      <!-- 5개 단위 선택 드롭다운 -->
      <select v-model="item.amount" class="amount-select">
        <option v-for="n in amountOptions" :key="n" :value="n">{{ n }}</option>
    </select>
    <p>선택된 수량: {{ item.amount }}병</p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return{
            amountOptions: [5, 10, 15, 20, 25, 30],  // 5개 단위 옵션
        }
    },
    computed: {
      basket() {
        const basket = this.$store.getters.basket;
        console.log(basket);
        return basket;
        }
    },
    methods: {
        goToDetail(item) {
            this.$router.push(`/gallery/detail/${item.id}`);
        },
        updateAmount(item) {
        // 수량을 변경할 때마다 Vuex 상태를 업데이트
            this.$store.dispatch('updateAmount', {
                id: item.id,
                amount: item.amount,
            });
        },
    },

}
</script>

<style scoped>
.basketlist {
  display: flex;
  justify-content: center; /* 가로로 가운데 정렬 */
  flex-wrap: wrap; /* 여러 줄로 배치될 경우 */
  gap: 20px; /* 요소 간 간격 */
}
.basketImg{
    width: 200px;
    height: 200px;
}
</style>