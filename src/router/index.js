import { createRouter, createWebHistory } from 'vue-router'
import Search from '../components/Search'
const routes = [{
        path: '/',
        name: 'search',
        component: Search
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ("../components/About.vue")
    },
    {
        path: '/user/:username',
        name: 'app.user',
        component: () =>
            import ("../components/User.vue"),
        props: route => ({...route.params, username: route.params.username })
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'app-active-link',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
        })
    }
})
export default router