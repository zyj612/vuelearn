import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = ()=> import('../components/Home')
const About = ()=> import('../components/About')
const User = ()=> import('../components/User')
const HomeNews = ()=> import('../components/HomeNews')
const HomeMessages = ()=> import('../components/HomeMessages')
const Profile = ()=> import('../components/Profile')


//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建vuerouter对象
const routes = [
  {
    path: '',
    //redirect重定向
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home,
    children:[
      {
        path: '',
        //redirect重定向
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'messages',
        component:HomeMessages
      }
    ]
  },
  {
    path: '/about',
    component:About
  },
  {
    path: '/user/:userId',
    component:User
  },
  {
    path: '/profile',
    component:Profile
  }
];

const router = new VueRouter({
  //配置路由和组件之间的关系
  routes,
  mode:'history',
  linkActiveClass : 'active'
})

//3.将router对象传入到vue实例
export default router
