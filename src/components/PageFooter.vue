<!-- PageFooter.vue -->
<template>
    <hr/>
    <footer>
      <div class="foot-wrapper">
        <div class="foot head">
          <h4>사업자번호</h4>
          <h4>대표</h4>
          <h4>사업장 주소</h4>
          <h4>대표번호</h4>
          <h4>E-Mail</h4>
        </div>
        <div class="foot foot">
          <h4>| ??????????????</h4>
          <h4>| 예주</h4>
          <h4>| 서울 구로구 머시깽</h4>
          <h4>| 비밀번호486</h4>
          <h4>| never@naver.com</h4>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style>
  .foot-wrapper {
    display: flex; /* flexbox로 자식 div를 가로로 나란히 배치 */
  }
  .foot {
    text-align: left; /* 텍스트 왼쪽 정렬 */
  }
  .head {
    width: 100px; /* 원하는 너비로 foot head의 크기 조정 */
  }
  .head h4, .foot h4 {
    margin: 0; /* 기본 margin 제거 */
    padding: 0; /* 기본 padding 제거 */
    line-height: 1.5; /* 줄 간격을 일치시킴 */
  }



  
  </style>