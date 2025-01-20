<template>
    <div class="container">
        <form @submit.prevent="handleLogin">
            <div>
                <label for="name">성함</label>
                <input type="text" id="username" v-model="username" />
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <button type="submit">로그인</button>  <router-link to="/signUp"><button>회원 가입</button></router-link>
        </form>

    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        handleLogin() {
            const userData = {
                username: this.username,
                password: this.password
            };

            // 로그인 액션 호출
            this.$store.dispatch('login', userData);
            console.log('로그인~~');
            this.$router.push('/');
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  