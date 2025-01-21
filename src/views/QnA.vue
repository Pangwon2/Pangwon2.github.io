<template>
    <div class="list">
        <button class="register" @click="goToRegister">글 작성</button>
        <div class="listWrap">
            <table class="tbList">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>제목</th>
                        <th>이름</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, a) in paginatedQnAs" :key="a" @click="goToDetail(QnA, a)">
                        <td>{{ a }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="search">
            <span>기준 :</span> &nbsp;
            <select v-model="selectedFilter" class="filt">
                <option value="name">이름</option>
                <option value="title">제목</option>
            </select>
            <input class="searchText" v-model="searchQuery"/>
            <button class="searchButton" @click="searchQnAs">검색</button>
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">이전</button>
            <span>페이지 {{ currentPage }} / {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">다음</button>
        </div>
        <a href="https://linktr.ee/myodamwine">
            <div class="link">
                링크트리
            </div>
        </a>
        <a href="https://www.instagram.com/myodamwine/">
            <div class="link">
                인스타그램
            </div>
        </a>
    </div>
  </template>
  
  <script>
  import QnA from '@/assets/qna';

  export default {
    data(){
        return{
            QnA : QnA,
            searchQuery: '',
            filteredQnA : QnA,
            selectedFilter: '',
            pageSize: 2,  // 한 페이지당 댓글 수
            currentPage: 1,  // 현재 페이지
        }
    },
    components : {
    },
    computed : {
        // 페이지네이션을 위한 필터링된 댓글
        paginatedQnAs() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.filteredQnA.slice(start, end);
        },
        // 총 페이지 수
        totalPages() {
            return Math.ceil(this.filteredQnA.length / this.pageSize);
        },
    },
    methods: {
        goToDetail(QnA, a) {
            console.log(QnA);
            this.$router.push({
                path: `/qna/detail/${a}`,
                state: { QnA: QnA }, // item을 state로 전달
            });
        },
        goToRegister() {
            this.$router.push('/registerQ');
        },
        searchQnAs() {
            const searchTerm = this.searchQuery.toLowerCase();
            if (this.selectedFilter === 'name') {
                this.filteredQnA = this.QnA.filter(co => 
                    co.name.toLowerCase().includes(searchTerm));
            } else if(this.selectedFilter === 'title') {
                this.filteredQnA = this.QnA.filter(co => 
                    co.title.toLowerCase().includes(searchTerm));
            }
            this.currentPage = 1;  // 검색 후 첫 페이지로 리셋
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
    },
  }
  </script>
  
  <style>
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

    .register {
        margin-left: auto;      /* 버튼을 오른쪽 끝으로 정렬 */
        margin-bottom: 10px;
    }

    .link {
        text-align : right;
        margin-top: 20px;
    }

    .search {
        margin-bottom: 10px;
        display: flex;            /* flexbox로 정렬 */
        align-items: center;      /* 아이템들을 세로로 정렬 */
        justify-content: center;
    }

    .searchText {
        height: 20px;             /* 입력창 높이 설정 */
    }
    .finding {
        height: 20px;
    }
    .filt {
        height: auto;
        font-size: 12px;
        margin-bottom: -2px;
    }
  
    .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 0 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  </style>