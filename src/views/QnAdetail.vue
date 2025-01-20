<template>
  <div class="buttons">
    <button class="return" @click="reTurn()">이전</button>
  <br>
    <div class="service" :key="id">
        <h3>{{ QnA[id].filter }}</h3>
        <h3>{{  QnA[id].name  }} | {{  QnA[id].date  }}</h3>
        <img :src="QnA[id].postImage" class="product">
        <h4 class="content">{{  QnA[id].content  }}</h4>
    </div>
  </div>
  </template>
  
  <script>
  import qna from '@/assets/qna';

  export default {
    data() {
      return {
        id: parseInt(this.$route.params.id),
        nextId : null,
        preId : null,
        QnA : qna,
      };
    },
    components : {
    },
    mounted() {
      this.updateIds();  // 컴포넌트가 처음 로드될 때 nextId, preId 초기화
    },
    methods : {
      reTurn() {
        this.$router.push({ path: '/service', query: { page: 1 } });
      },
      updateIds() {
        this.nextId = this.id + 1;
        this.preId = this.id - 1;
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
  </style>