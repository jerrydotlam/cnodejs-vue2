import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require(['./components/home'], resolve)

const Topic = resolve => require(['./components/topic'], resolve)
const TopicEdit = resolve => require(['./components/topic/TopicEdit'], resolve)
const TopicDetail = resolve => require(['./components/topic/TopicDetail'], resolve)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/topic/',
        name: 'topic-list',
        component: Topic
    },
    {
        path: '/topic/edit',
        name: 'topic-edit',
        component: TopicEdit
    },
    {
        path: '/topic/:id',
        name: 'topic-detail',
        component: TopicDetail
    },
    {
        path: '*',
        component: Home
    }
]

const router = new VueRouter({
    routes
})

export default router
