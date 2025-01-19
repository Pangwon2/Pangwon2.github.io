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
                    <tr v-for="(item, a) in QnA" :key="a" @click="goToDetail(QnA, a)">
                        <td>{{ a }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.date }}</td>
                    </tr>
                </tbody>
            </table>
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
        }
    },
    components : {
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
        align-self: flex-end;     /* 버튼을 오른쪽 끝으로 정렬 */
        margin-bottom: 10px;
    }

    .link {
        text-align : right;
        margin-top: 20px;
    }
  
  </style>