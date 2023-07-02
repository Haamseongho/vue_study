import VueRouter from 'vue-router'
import Vue from 'vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import HomeView from "../views/Home.vue"

const router = new VueRouter({
    mode: 'history',
   // base: process.env.BASE_URL,
    routes: [
        {
            // 특정 Url 주소 
            path: '/news',
            // 이름
            name: "News",
            // Url 주소로 갔을때 표시될 컴포넌트 
            component: NewsView,
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: JobsView,
        },
        {
            path: '/ask',
            name: 'Ask',
            component: AskView,
        },
        {
            path: "/",
            name: "Home",
            component: HomeView
        }
    ]
})


Vue.use(VueRouter)


export default router;