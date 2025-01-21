import { createStore } from 'vuex';
import comment from './assets/comment';

const store = createStore({
  state: {
    // 로그인 상태와 사용자 정보
    isAuthenticated: false,
    user: null,
    isAdmin: false,
    comment: comment,
    basket: [],
  },
  mutations: {
    // 로그인 상태와 사용자 정보를 업데이트하는 뮤테이션
    setAuthentication(state, userData) {
      state.isAuthenticated = true;
      state.user = userData.user;
      state.isAdmin = userData.isAdmin;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.isAdmin = false;
    },
    addComment(state, newComment) {
        const newNo = state.comment.length + 1;
        newComment.no = newNo;
        state.comment.push(newComment);
    },
    addBasket(state, product) {
      state.basket.push(product);
    },
  },
  actions: {
    // 로그인 처리
    login({ commit }, userData) {
        // 실제로 로그인 API를 호출하거나, 로컬에서 간단히 처리
        const { username, password } = userData;

        // 예시로, 'admin' 사용자 이름을 가진 사람은 관리자로 처리
        const isAdmin = username === 'admin';

        commit('setAuthentication', { user: username, isAdmin });
    },
    // 로그아웃 처리
    logout({ commit }) {
      commit('logout');
    },
    addNewComment({ commit }, newComment) {
        commit('addComment', newComment);
    },
    product({ commit }, product) {
      commit('addBasket', product);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    isAdmin: (state) => state.isAdmin,
    comment: (state) => state.comment.slice().reverse(),
    basket: state => state.basket,
  }
});

export default store;