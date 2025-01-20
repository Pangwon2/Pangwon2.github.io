<template>
    <button class="return" @click="reTurn()">이전</button>
    <div class="container">
        <form @submit.prevent="registerAform">
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
    name: 'registerQ',
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
            this.$router.push('/service');
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  