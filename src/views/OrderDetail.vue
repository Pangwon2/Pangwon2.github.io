<template>
<div class="order_list">
        <div class="order_listWrap">
            <table class="tbOrder">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>이름</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, a) in order" :key="a">
                        <td>{{ a }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import order from '@/assets/order';
 export default{
    data() {
        return {
            order : order,
        }
    },
    methods: {
    },

 }
</script>

<style>
    .order_list {
        max-width: 1200px; /* 최대 너비 지정 */
        margin: 0 auto; /* 수평 중앙 정렬 */
        padding: 20px; /* 내부 여백 */
    }

    .order_listWrap {
        width: 100%; /* 100% 너비로 확장 */
        overflow-x: auto; /* 가로 스크롤 가능 */
    }

    .tbOrder {
        width: 100%; /* 테이블 너비 100% */
        border-collapse: collapse; /* 테이블 셀 간 경계 없애기 */
    }

    .tbOrder th{
        border-top:1px solid #888;
    }

	.tbOrder th, .tbOrder td{
        border-bottom:1px solid #eee;
        padding:5px 0;
    }

	.tbOrder td.txt_left{
        text-align:left;
    }

    .order_list {
        display: flex;            /* flexbox 레이아웃을 적용 */
        flex-direction: column;   /* 세로로 정렬 */
    }

    .order_listWrap {
        flex-grow: 1;             /* 이 영역이 나머지 공간을 차지하도록 설정 */
    }
</style>