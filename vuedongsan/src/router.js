import {createRouter, createWebHistory} from 'vue-router';

import Home from './components/Home.vue'
import Detail from './components/Modal.vue'
import List from './components/List.vue'

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/list',
        component : List
    },
    {
        path:'/detail/:id',
        component: Detail,
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;