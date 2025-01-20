<!-- PageHome.vue -->
<template>
    <div class="home">
      <img class="home_logo" alt="logo" src="../assets/logo.webp">
      <br>
      <img class="product" src="../assets/myodam.jpg">
      <img class="product" src="../assets/myodam2.jpg">
      <img class="product" src="../assets/myodam3.jpg">
      <h4>낄낄낄길낄</h4>
      <h4>낄낄낄길낄</h4>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'PageHome',
    components: {
    },
    methods: {

    },
  }
  </script>

  <style>
  .product{
    width: 300px;     /* 원하는 너비로 설정 */
    height: 400px;     /* 비율을 유지하여 높이를 자동으로 설정 */
    object-fit: cover; /* 이미지 비율을 유지하면서, 필요한 경우 잘라냄 */
    margin: 10px;
  }
  
  .home_logo{
    width: 200 px;
    height: 300 px;
  }

  </style>