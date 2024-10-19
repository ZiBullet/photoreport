import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.url.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/events',
            name: 'Events',
            component: () => import('@/views/Events.vue')
        },
        {
            path: '/estabs',
            name: 'Establishments',
            component: () => import('@/views/Estabs.vue')
        },
        {
            path: '/order',
            name: 'Order',
            component: () => import('@/views/Order.vue')
        },
        {
            path: '/reports',
            name: 'Reports',
            component: () => import('@/views/Reports.vue')
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('@/views/Search.vue')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('@/views/Profile.vue')
        },
    ]
})

export default router