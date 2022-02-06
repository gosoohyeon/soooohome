import {createWebHistory, createRouter} from 'vue-router';

import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Home from './components/Home.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
// import ErrorPage from './components/ErrorPage.vue'

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail/:id",
        component: Detail,
        children:[
            {
                path:"author",
                component:Author
            },
            {
                path:"comment",
                component:Comment
            }
        ]
    },
    {
        path: "/list",
        component: List,
    },
    // {
    //     path: "/:anything(.*)",
    //     component: ErrorPage,
    // }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;