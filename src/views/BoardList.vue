<template>
    <div class="list">
        <button class="registerA" @click="goToRegisterA" v-if="isAdmin">글 작성</button>
        <div class="listWrap">
            <table class="tbList">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>필터</th>
                        <th>색상</th>
                        <th>이름</th>
                        <th>날짜</th>
                        <th>추천</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, a) in filteredPosts" :key="a" @click="goToDetail(item, a)">
                        <td>{{ a + 1 }}</td>
                        <td>{{ item.filter }}</td>
                        <td>{{ item.color }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.likes }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="search">
            <span>성함 :</span> &nbsp;
            <input v-model="searchQuery" placeholder="성함을 입력하세요" class="search text"/>
            <button class="finding" @click="searchPosts">검색</button>
        </div>
    </div>
  </template>
  
  <script>
  import postdata from '@/assets/postdata';

  export default {
    data(){
        return{
            postdata : postdata,
            searchQuery: '', // 검색어
            filteredPosts: postdata,
        }
    },
    computed: {
        // Vuex에서 isAdmin 상태 가져오기
        isAdmin() {
            console.log(this.$store.getters.isAdmin);
            return this.$store.getters.isAdmin;
        },
        
    },
    components : {
    },
    methods: {
        goToDetail(item, a) {
            this.$router.push({
                path: `/board/detail/${a}`,
                state: { item: item }, // item을 state로 전달
            });
        },
        goToRegisterA() {
            this.$router.push('/registerA');
        },
        searchPosts() {
            // 검색어로 필터링된 게시글을 filteredPosts에 저장
            const searchTerm = this.searchQuery.toLowerCase();
            this.filteredPosts = this.postdata.filter(post => 
                post.name.toLowerCase().includes(searchTerm)
            );
        }
    },
  }
  </script>
  
  <style scoped>
    .list {
        max-width: 1200px; /* 최대 너비 지정 */
        margin: 0 auto; /* 수평 중앙 정렬 */
        padding: 20px; /* 내부 여백 */
    }

    .listWrap {
        width: 100%; /* 100% 너비로 확장 */
        overflow-x: auto; /* 가로 스크롤 가능 */
    }

    .tbList {
        width: 100%; /* 테이블 너비 100% */
        border-collapse: collapse; /* 테이블 셀 간 경계 없애기 */
    }

    .tbList th{
        border-top:1px solid #888;
    }

	.tbList th, .tbList td{
        border-bottom:1px solid #eee;
        padding:5px 0;
    }

	.tbList td.txt_left{
        text-align:left;
    }

    .list {
        display: flex;            /* flexbox 레이아웃을 적용 */
        flex-direction: column;   /* 세로로 정렬 */
    }

    .listWrap {
        flex-grow: 1;             /* 이 영역이 나머지 공간을 차지하도록 설정 */
    }
    .search {
        margin-top: 10px;
        display: flex;            /* flexbox로 정렬 */
        align-items: center;      /* 아이템들을 세로로 정렬 */
    }

    .text {
        height: 20px;             /* 입력창 높이 설정 */
    }
    .finding {
        height: 20px;
    }

    .registerA {
        margin-left: auto;     /* 버튼을 오른쪽 끝으로 정렬 */
        margin-bottom: 10px;          /* 버튼과 테이블 사이에 간격 추가 */
    }
  
  </style>