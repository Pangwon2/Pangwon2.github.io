import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/PageHome.vue'
import BoardList from '../views/BoardList.vue'
import BoardDetail from '../views/BoardDetail.vue'
import Gallery from '@/views/Gallery.vue'
import GalleryDetail from '@/views/GalleryDetail.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import RegisterA from '@/components/RegisterA.vue'
import RegisterQ from '@/components/RegisterQ.vue'
import QnA from '@/views/QnA.vue'
import QnAdetail from '@/views/QnAdetail.vue'
import Order from '@/views/Order.vue'
import OrderDetail from '@/views/OrderDetail.vue'
import Comment from '@/views/Comment.vue'
import CommentDetail from '@/views/CommentDetail.vue'
import RegisterC from '@/components/RegisterC.vue'
import Basket from '@/views/Basket.vue'

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageAbout.vue'),
  },
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList,
  },
  {
    path: '/board/detail/:id',
    name: 'BoardDetail',
    component: BoardDetail,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/gallery/detail/:id',
    name: 'GalleryDetail',
    component: GalleryDetail,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/registerA',
    name: 'RegisterA',
    component: RegisterA,
  },
  {
    path: '/registerQ',
    name: 'RegisterQ',
    component: RegisterQ,
  },
  {
    path: '/registerC',
    name: 'RegisterC',
    component: RegisterC,
  },
  {
    path: '/qna',
    name: 'QnA',
    component: QnA,
  },
  {
    path: '/qna/detail/:id',
    name: 'QnAdetail',
    component: QnAdetail,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: OrderDetail,
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment,
  },
  {
    path: '/comment/detail/:id',
    name: 'CommentDetail',
    component: CommentDetail,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router