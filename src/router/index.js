import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Main',
        component:() => import('@/pages/Main.vue'),
        children:[
            // {
            //     path:'/home',
            //     name:'home',
            //     component:() => import('@/pages/Home')
            // },
            // {
            //     path:'/user',
            //     name:'user',
            //     component:() => import('@/pages/User')
            // },
            // {
            //     path:'/mall',
            //     name:'mall',
            //     component:() => import('@/pages/Mall')
            // },
            // {
            //     path:'/page1',
            //     name:'page1',
            //     component:() => import('@/pages/Other/pageOne.vue')
            // },
            // {
            //     path:'/page2',
            //     name:'page2',
            //     component:() => import('@/pages/Other/pageTwo.vue')
            // }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('@/pages/Login/login.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;