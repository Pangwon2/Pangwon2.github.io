<template>
    <div class="filters">
        <!-- 필터링 조건 -->
        <div>
        <label for="filter">필터:</label>
        <select id="filter" v-model="selectedFilter">
            <option value="">전체</option>
            <option value="wedding">웨딩</option>
            <option value="gift">선물</option>
            <!-- 추가 필터 옵션을 여기에 추가 -->
        </select>
        </div>
        <div>
        <label for="color">색상:</label>
        <select id="color" v-model="selectedColor">
            <option value="">전체</option>
            <option value="white">흰색</option>
            <option value="black">검정</option>
            <option value="blue">파랑</option>
            <option value="red">빨강</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <!-- 추가 색상 옵션을 여기에 추가 -->
        </select>
        </div>

        <div>
        <label for="price">가격대:</label>
        <select id="price" v-model="selectedPrice">
            <option value="">전체</option>
            <option value="low">저가</option>
            <option value="medium">중간</option>
            <option value="high">고가</option>
        </select>
        <label for="sort">정렬:</label>
        <select id="sort" v-model="sort">
            <option value="">최신순</option>
            <option value="price">가격순</option>
            <option value="likes">좋아요순</option>
        </select>
        </div>
    </div>
    <div class="gallery" ref="scrollcheck">
        <div v-for="(item, a) in filteredData.slice(0, visibleIdx)" :key="a">
            <img :src="item.postImage" alt="Gallery Image" class="image-item" @click="goToDetail(a)"/>
            <h4>{{ item.filter }}</h4>
            <h4>{{ item.color }}</h4>
            <h4>{{ item.price }}원</h4>
            <h4>{{ item.likes }}</h4>
        </div>
    </div>

</template>

<script>
import gallerydata from '@/assets/gallerydata';

    export default {
        data() {
            return {
                // 모든 .jpg 파일 경로를 가져오는 require.context
                gallerydata: gallerydata,
                id: this.a,
                selectedFilter: '', // 선택된 필터
                selectedColor: '', // 선택된 색상
                selectedPrice: '', // 선택된 가격대
                sort: '',
                visibleIdx: 5,
            };
        },
        computed: {
            filteredData() {
                //필터링
                let filtered = this.gallerydata.filter(item => {
                const matchesFilter = this.selectedFilter ? item.filter === this.selectedFilter : true;
                const matchesColor = this.selectedColor ? item.color === this.selectedColor : true;
                const matchesPrice = 
                this.selectedPrice ? (this.selectedPrice === 'low' && item.price < 50000) ||
                    (this.selectedPrice === 'medium' && item.price >= 50000 && item.price <= 100000) ||
                    (this.selectedPrice === 'high' && item.price > 100000)
                : true;

                return matchesFilter && matchesColor && matchesPrice;
                });
                // 정렬 처리
                if (this.sort === 'price') {
                    filtered = filtered.sort((a, b) => b.price - a.price);
                } else if (this.sort === 'likes') {
                    filtered = filtered.sort((a, b) => b.likes - a.likes);
                }
                return filtered;
            },
        },
        methods: {
            goToDetail(id) {
                console.log(id);
                this.$router.push(`/gallery/detail/${id}`)
            },
            handleScroll() {
                if (this.$refs.scrollcheck.scrollHeight - (window.innerHeight + window.scrollY) < 1000){
                    this.visibleIdx += 5 
                }
            },
        },
        created() {
            console.log("created");
            window.addEventListener("scroll", this.handleScroll);
        },
        beforeRouteLeave(to, from, next) {
            console.log("제거됨");
            // 라우트를 떠날 때 스크롤 이벤트 리스너를 제거합니다.
            window.removeEventListener("scroll", this.handleScroll);
            next(); // 라우팅을 계속 진행
        },
        //라우터로 이동시 안됨
        // beforeDestroy() {
        //     console.log("destroyed");
        //     window.removeEventListener('scroll', this.handleScroll);
        // },
    };

</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.image-item {
  width: 1000px;
  height: 1000px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 필터링 조건 스타일 */
.filters {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

label {
  margin-right: 5px;
}

select {
  padding: 5px;
  margin-right: 20px;
}
</style>