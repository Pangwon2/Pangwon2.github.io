<template>
  <header>
    <nav>
      <div id="hamburger-menu" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul id="nav-menu">
        <router-link to="/">
          <img class="logo" src="../assets/logo_head.jpg" alt="Logo">
        </router-link>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/board/list">Product List</router-link></li>
        <li class="serviceDrop" @click="serviceDrop">
          <a href="#" class="serviceDrop">service</a>
          <div v-show="serviceVisible" class="service-content" id="service-content">
            <router-link to="/comment">Comment</router-link>
            <router-link to="/qna">QnA</router-link>
          </div>
        </li>
        <!-- Order dropdown menu -->
        <li class="dropdown" @click="dropdown">
          <a href="#" class="dropbtn">Order</a>
          <div v-show="dropdownVisible" class="dropdown-content" id="dropdown-content">
            <router-link to="/order">Order</router-link>
            <router-link to="/orDerDetail">Order List</router-link>
          </div>
        </li>
      
      <router-link to="/signIn">
        <div class="signIn" v-if="!isAuthenticated">
          로그인
        </div>
      </router-link>
      <div class="user" v-if="isAuthenticated">
        <p v-if="user=='admin'">안녕하세요, 관리자님!</p>
        <p v-else>안녕하세요, {{ user }}님!</p>
        <button class="logOut" @click="logout">로그아웃</button>
      </div>
    </ul>
    </nav>
  </header>
  <hr />
</template>

<script>
export default {
  data() {
    return {
      dropdownVisible: false,
      serviceVisible: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    toggleMenu() {
      const navMenu = document.getElementById('nav-menu');
        if (navMenu.style.display === 'block') {
          navMenu.style.display = 'none';
        } else {
          navMenu.style.display = 'block';
        }
    },
    // dropdown() {
    //   const dropMenu = document.getElementById('dropdown-content')
    //     if(dropMenu.style.display === 'block') {
    //       dropMenu.style.display = 'none';
    //     } else {
    //       dropMenu.style.display = 'block';
    //     }
    // },
    dropdown() {
      // Vue에서 상태를 변경하여 드롭다운 표시 상태를 제어
      this.dropdownVisible = !this.dropdownVisible;
    },
    serviceDrop() {
      // Vue에서 상태를 변경하여 드롭다운 표시 상태를 제어
      this.serviceVisible = !this.serviceVisible;
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style>

#nav-bar {
  background-color: rgb(248, 252, 255);
  border-bottom: 1px solid rgb(219, 224, 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  margin: 0;
  padding: 0;
}

#nav-menu {
  display: block;
  justify-content: center; /* 수평 가운데 정렬 */
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* 내용이 넘치면 숨김 */
  overflow: hidden;
}

#nav-menu li {
  display: inline-block; /* 리스트 항목을 인라인 블록으로 설정 */
  letter-spacing: 1px; /* 텍스트의 자간을 2px로 설정 */
  margin-left: -20px;
  margin-right: 100px; /* 각 항목 간의 간격 설정 */
}

#nav-menu li:last-child {
  margin-right: 0; /* 마지막 항목은 오른쪽 마진을 없애기 */
}

#nav-menu li a {
  display: block; /* 링크를 블록으로 */
  text-align: center; /* 텍스트는 블록의 중심 */
  padding: 20px;
  text-decoration: none; /* 링크의 밑줄 제거 */
  font-family: Helvetica;
  color: black;
  cursor: pointer;
  margin: 0 20px;
  font-size: large;
  font-weight: 100; /* 글씨를 얇게 설정 */
}

#nav-menu li a:hover {
  background-color: aliceblue;
  color: black;
  font-weight: bold;
}

/* 햄버거 메뉴 스타일 설정 */
#hamburger-menu {
  display: none; /* 기본 상태에서는 햄버거 메뉴 숨김 */
  cursor: pointer; /* 마우스 오버 시 포인터 모양 변경 */
  padding: 10px;
}

/* 햄버거 메뉴 아이콘 스타일 (세 개의 가로줄) */
#hamburger-menu div {
  width: 25px; /* 가로줄 너비 */
  height: 2px; /* 가로줄 높이 */
  background-color: black;
  margin: 6px 0; /* 상하 마진 설정 (줄 간격) */
}


.logo {
    width: 100px;            /* 틀 너비 고정 */
    height: 60px;           /* 틀 높이 고정 */
    overflow: hidden;        /* 이미지가 틀을 넘어가지 않도록 숨기기 */
    float: left;
    vertical-align: middle; /* 이미지를 수직 중앙 정렬 */
    margin-left: 5px;        
  }

/* 미디어 쿼리를 사용한 반응형 디자인 설정 */
@media screen and (max-width: 600px) {
  #nav-menu {
    display: none; /* 초기 상태에서는 숨김 */
    width: 100%; /* 메뉴바 전체 너비 */
    background-color: rgb(248, 252, 255); /* 배경색 */
  }
  #nav-menu li {
    float: none; /* 세로 정렬을 위해 float 제거 */
    width: 100%; /* 각 항목 전체 너비 */
  }
  #nav-menu li a {
    text-align: left; /* 텍스트 왼쪽 정렬 */
  }
  #hamburger-menu {
    display: block; /* 햄버거 메뉴 표시 */
  }

}

@media screen and (min-width: 600px) {
  /* 600px 이상일 때 적용할 스타일 */
  #nav-menu {
    display: block !important; /* 초기 상태에서는 숨김 */
  }
}

.signIn{
  text-align: right;
  margin-right: 20px;
}

.user{
  text-align: right;
  margin-right: 20px;
}


/* Dropdown Menu */
.dropdown-content {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0);
  z-index: 1000;
}
.service-content {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0);
  z-index: 1000;
}
.signIn{
  float: right;
  margin-top: 20px;
}
.user {
  float: right;
  margin-top: -20px; 
  gap: 10px;               /* 글자와 버튼 간의 간격 설정 */
}
button.logOut {
  padding: 5px 10px;       /* 버튼에 여백 추가 */
  cursor: pointer;         /* 버튼 클릭 커서 변경 */
}

</style>
