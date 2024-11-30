import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Person from '@/pages/Person.vue'
import TailwindCss from '@/pages/tailwind/TailwindCss.vue'
import Block from '@/pages/tailwind/Block.vue'
import Button from '@/pages/tailwind/Button.vue'
import Login from '@/pages/tailwind/Login.vue'
import Contact from '@/pages/tailwind/Contact.vue'
import Essential from '@/pages/tailwind/Essential.vue'
import RouterJumpWay from '@/pages/routes/RouteJumpWay.vue'
import NameJump from '@/pages/routes/NameJump.vue'
import ReplaceJump from '@/pages/routes/ReplaceJump.vue'
import CarDetail from '@/pages/routes/CarDetail.vue'
import QueryParams from '@/pages/routequery/QueryParams.vue'
import QueryMethod1 from '@/pages/routequery/QueryMethod1.vue'
import QueryMethod2 from '@/pages/routequery/QueryMethod2.vue'
import QueryMethod3 from '@/pages/routequery/QueryMethod3.vue'
import Params from '@/pages/routeparams/Params.vue'
import ParamsMethod1 from '@/pages/routeparams/ParamsMethod1.vue'
import ParamsMethod2 from '@/pages/routeparams/ParamsMethod2.vue'
import ParamsMethod3 from '@/pages/routeparams/ParamsMethod3.vue'
import Props from '@/pages/routeprops/Props.vue'
import PropsMethod1 from '@/pages/routeprops/PropsMethod1.vue'
import PropsMethod2 from '@/pages/routeprops/PropsMethod2.vue'
import PropsMethod3 from '@/pages/routeprops/PropsMethod3.vue'
import PropsMethod4 from '@/pages/routeprops/PropsMethod4.vue'
import ComponentCommunication from '@/pages/componentcommunication/ComponentCommunication.vue'
import PropsFather from '@/pages/componentcommunication/PropsFather.vue'

const router = createRouter({
    history: createWebHistory(),//路由器的工作模式，history模式和hash模式
    routes: [

        //解决根路径问题,这里写出了一个很傻逼的错误，把component写成components了
        //路由重定向
        {
            path: "/",
            //redirect: '/home'
            component: Home
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/about",
            component: Person
        },
        {
            path: "/tailwindcss",
            component: TailwindCss,
            children: [
                {
                    name: "block",
                    path: "block",
                    component: Block
                },
                {
                    name: "button",
                    path: "button",
                    component: Button
                },
                {
                    name: "login",
                    path: "login",
                    component: Login
                },
                {
                    name: "contact",
                    path: "contact",
                    component: Contact
                }
            ]
        },
        {
            path: "/routerjumpway",
            component: RouterJumpWay,
            children: [
                {
                    name: "namejump",
                    path: "namejump",
                    component: NameJump
                },
                {
                    path: "replacejump",
                    component: ReplaceJump
                },
                {
                    name: "cardetail",
                    path: "cardetail",
                    component: CarDetail
                },
                {
                    name: "essential",
                    path: "essential",
                    component: Essential
                }
            ]
        },
        {
            path: "/queryparams",
            component: QueryParams,
            children: [
                {
                    path: "querymethod1",
                    component: QueryMethod1,
                },
                {
                    path: "querymethod2",
                    component: QueryMethod2,
                },
                {
                    name: "querymethod3",
                    path: "querymethod3",
                    component: QueryMethod3,
                }
            ]
        },
        {
            path: "/params",
            component: Params,
            children: [
                {
                    path: "paramsmethod1/:id/:brand/:price",
                    component: ParamsMethod1,
                },
                {
                    name: 'paramsmethod2',
                    path: "paramsmethod2/:id/:brand/:price",
                    component: ParamsMethod2,
                },
                {
                    name: "paramsmethod3",
                    path: "paramsmethod3/:id/:brand/:price?",
                    component: ParamsMethod3,
                }
            ]
        },
        {
            path: "/props",
            component: Props,
            children: [
                {

                    path: "propsmethod1",
                    component: PropsMethod1,
                    //第一种写法：将路由收到的所有query参数作为props传给路由组件
                    props: true
                },
                {
                    name: "propsmethod2",
                    path: "propsmethod2/:id/:brand/:price?",
                    component: PropsMethod2,
                    //第一种写法：将路由收到的所有params参数作为props传给路由组件
                    props: true
                },
                {
                    path: "propsmethod3",
                    component: PropsMethod3,
                    //第二种写法：通过query函数返回传给路由组件
                    props(route) {
                        return route.query
                    }
                },
                {
                    name: "propsmethod4",
                    path: "propsmethod4/:id/:brand/:price?",
                    component: PropsMethod4,
                    //第二种写法：通过params函数返回传给路由组件
                    props(route) {
                        return route.params
                    }
                }
            ]
        },
        {
            path: "/componentcommunication",
            component: ComponentCommunication,
            children: [
                {
                    path: "propsfather",
                    component: PropsFather,
                }
            ]
        }
    ]

})

export default router