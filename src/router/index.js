import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载引入
const Layout = () => import('@/views/layout')// 布局组件
const Home = () => import('@/views/home/index')// 首页组件
const Question = () => import('@/views/question/index')// 问答组件
const Video = () => import('@/views/video/index')// 视频组件
const User = () => import('@/views/user/index')// 个人中心组件
const UserProfile = () => import('@/views/user/profile')// 编辑资料组件
const UserChat = () => import('@/views/user/chat')// 小智同学组件
const Login = () => import('@/views/user/login')// 登录组件
const Search = () => import('@/views/search/index')// 搜索中心组件
const SearchResult = () => import('@/views/search/result')// 搜索结果组件
const Article = () => import('@/views/home/article')// 文章详情
Vue.use(VueRouter)

const routes = [
//  路由规则
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/question', name: 'question', component: Question },
      { path: '/video', name: 'video', component: Video },
      { path: '/user', name: 'user', component: User }
    ]
  },
  { path: '/user/profile', name: 'user-profile', component: UserProfile },
  { path: '/user/chat', name: 'user-chat', component: UserChat },
  { path: '/login', name: 'login', component: Login },
  { path: '/search', name: 'search', component: Search },
  { path: '/search/result', name: 'search-result', component: SearchResult },
  { path: '/article', name: 'article', component: Article }
]

const router = new VueRouter({
  routes
})

export default router
