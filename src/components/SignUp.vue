<template>
    <div class="container">
        <form @submit.prevent="signUpForm">
            <div>
                <label for="email">email</label>
                <input type="text" id="email" v-model="email" />
            </div>
            <div>
                <label for="name">성함</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <div>
                <label for="passwordCheck">비밀번호 확인</label>
                <input type="password" id="passwordCheck" v-model="passwordCheck" />
            </div>
            <div>
                <label for="address">주소</label>
                <input type="text" id="address" v-model="address" />
            </div>
            <div>
                <label for="phone">연락처</label>
                <input type="number" id="phone" v-model="phone" />
            </div>
            <button type="submit">회원 가입</button>
        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            name: '',
            password: '',
            passwordCheck: '',
            address: '',
            phone: '',
        }
    },
    methods: {
        signUpForm() {
            console.log('가입성공');
            this.$router.push('/signIn');
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  