<!-- PageHeader.vue -->
<template>
    <header>
      <div id="nav">
        <router-link to="/">
          <img class="logo" src="../assets/logo_head.jpg" alt="Logo">
        </router-link>
        <router-link to="/">Home</router-link> |
        <router-link to="/gallery">Gallery</router-link> |
        <router-link to="/about">About Us</router-link> |
        <router-link to="/board/list">Product List</router-link> |
        <a href="https://linktr.ee/myodamwine">Service Linktree</a>
      </div>
    </header>
    <hr/>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .logo {
    width: 100px;            /* 틀 너비 고정 */
    height: 60px;           /* 틀 높이 고정 */
    overflow: hidden;        /* 이미지가 틀을 넘어가지 않도록 숨기기 */
    float: left;
    vertical-align: middle; /* 이미지를 수직 중앙 정렬 */
    margin-top: -20px;        /* 이미지를 위로 5px 이동 */
  }
  
  </style>