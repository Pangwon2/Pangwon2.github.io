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
                    <tr v-for="(item, a) in comment" :key="a" @click="goToDetail(item, a)">
                        <td>{{ a }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </template>
  
  <script>
  import comment from '@/assets/comment';

  export default {
    data(){
        return{
            comment : comment,
        }
    },
    mounted() {
        // 컴포넌트가 마운트되었을 때 댓글 데이터를 콘솔에 출력
        console.log(this.comment);
    },

    components : {
    },
    methods: {
        goToDetail(item, a) {
            this.$router.push({
                path: `/comment/detail/${a}`,
                state: { item: item }, // item을 state로 전달
            });
        },
        goToRegister() {
            this.$router.push('/registerC');
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