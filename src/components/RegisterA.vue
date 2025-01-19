<template>
    <button class="return" @click="reTurn()">이전</button>
    <div class="container">
        <form @submit.prevent="registerAform">
            <div>
                <select id="filter">
                    <option value="wedding">wedding</option>
                    <option value="gift">gift</option>
                    <option value="reward">reward</option>
                </select>
            </div>
            <div>
                <select id="color">
                    <option value="black">black</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="white">white</option>
                    <option value="green">green</option>
                    <option value="other">other</option>
                </select>
            </div>
            <div>
                <label for="name">이름</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div>
                <label for="date">날짜</label>
                <input type="date" id="date" v-model="date" />
            </div>
            <div>
                <label for="content">내용</label>
                <textarea id="content" v-model="content"></textarea>
            </div>
            <div>
                <label for="picture">사진</label>
                <input type="file" id="picture" />
            </div>
            <button type="submit">작성</button>
        </form>

    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            name: '',
            date: '',
            content: '',
        };
    },
    methods: {
        registerAform() {
            console.log('관리자 글 작성 성공');
            this.reTurn();
        },
        reTurn() {
            this.$router.push({ path: '/board/list', query: { page: 1 } });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  