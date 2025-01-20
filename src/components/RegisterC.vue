<template>
    <button class="return" @click="reTurn()">이전</button>
    <div class="container">
        <form @submit.prevent="registerAform">
            <div>
                <label for="name">이름</label>
                <input type="text" id="name" v-model="name" readonly />
            </div>
            <div>
                <label for="date">날짜</label>
                <input type="date" id="date" v-model="date" />
            </div>
            <div>
                <label for="title">제목</label>
                <input type="text" id="title" v-model="title" />
            </div>
            <div>
                <label for="content">내용</label>
                <textarea id="content" v-model="content"></textarea>
            </div>
            <div>
                <label for="filter">필터</label>
                <input type="text" id="filter" v-model="filter" />
            </div>
            <div>
                <label for="color">색상</label>
                <input type="text" id="color" v-model="color" />
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
    name: 'registerC',
    data() {
        return {
            name: this.$store.getters.user,
            date: '',
            title: '',
            content: '',
            filter: '',
            color: '',
        };
    },
    computed: {
    },
    methods: {
        registerAform() {
            const newComment = {
                name: this.name,
                postImage: "https://picsum.photos/600?random=6",
                date: new Date().toLocaleDateString(),
                title: this.title,
                content: this.content,
                filter: this.filter,
                color: this.color,
            }

            console.log(newComment);

            this.$store.dispatch('addNewComment', newComment);
            console.log('성공');
            
            this.reTurn();
        },
        reTurn() {
            this.$router.push('/');
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  