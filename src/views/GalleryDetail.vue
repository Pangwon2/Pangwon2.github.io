<template>
  <div class="buttons">
    <button class="return" @click="reTurn()">이전</button>
    <router-link :to="`/gallery/detail/${nextId}`" v-if="nextId < gallerydata.length">
      <button class="move">다음 글</button>
    </router-link>
    <router-link :to="`/gallery/detail/${preId}`" v-if="preId >= 0">
      <button class="move">이전 글</button>
    </router-link>
  <br>
    <div class="post" :key="id" v-if="id <= gallerydata.length">
        <h3>{{ gallerydata[id].filter }} | {{ gallerydata[id].color }}</h3>
        <img :src="gallerydata[id].postImage" class="product">
        <h3>{{ gallerydata[id].price }}원</h3>
        <h4 class="content">{{  gallerydata[id].content  }}</h4>

        <!-- 수량 입력 -->
        <input class="amount" type="number" v-model="amount" min="1"/>
          <!-- 5개 단위 선택 드롭다운 -->
        <select v-model="amount" class="amount-select">
          <option v-for="n in amountOptions" :key="n" :value="n">{{ n }}</option>
        </select>
        <p>선택된 수량: {{ amount }}병</p>

        <br>
        <button class="basket" @click="showModal = true">장바구니</button>
        <button>바로구매</button>
    </div>
    <div class="error" v-if="id > gallerydata.length">
      <h3>게시글이 없습니다.</h3>
    </div>

    <!-- 모달 -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <p>장바구니에 넣으시겠습니까?</p>
        <button @click="putBasket">예</button>
        <button @click="cancelModal">아니오</button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import gallerydata from '@/assets/gallerydata';

  export default {

    data() {
      return {
        id: parseInt(this.$route.params.id),
        nextId : null,
        preId : null,
        gallerydata : gallerydata,
        showModal: false,
        amount: 1,
        amountOptions: [5, 10, 15, 20, 25, 30],  // 5개 단위 옵션
      };
    },
    components : {
    },
    mounted() {
      this.updateIds();  // 컴포넌트가 처음 로드될 때 nextId, preId 초기화
    },
    methods : {
      reTurn() {
        this.$router.push({ path: '/gallery'});
      },
      updateIds() {
        this.nextId = this.id + 1;
        this.preId = this.id - 1;
      },
      putBasket() {
        const product = {
        id: this.id,
        filter: gallerydata[this.id].filter,
        color: gallerydata[this.id].color,
        postImage: gallerydata[this.id].postImage,
        price: gallerydata[this.id].price,
        content: gallerydata[this.id].content,
        amount: this.amount,
        }
        this.$store.dispatch('product', product);
        console.log('들어감~')
        this.showModal = false;
      },
      cancelModal() {
        this.showModal = false;  // 모달 닫기
      },
    },
    
    watch: {
        '$route.params.id'(newId) {
          // URL의 id 값이 변경되면 currentId 업데이트
          this.id = parseInt(newId);
          this.updateIds();
        }
    },
      
      
    

  }
  </script>
  
  <style>
  .content {
    white-space: pre-line; /* 줄바꿈을 반영 */
  }

  .product{
    width: 300px;     /* 원하는 너비로 설정 */
    height: 400px;     /* 비율을 유지하여 높이를 자동으로 설정 */
    object-fit: cover; /* 이미지 비율을 유지하면서, 필요한 경우 잘라냄 */
    margin: 10px;
  }
  .buttons{
    display: block; 
  }
  .return{
    float: left;
  }

  .move {
    float: right;
  }

  /* 모달 스타일 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

button {
  margin: 10px;
}
  </style>