import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/StudentSpace.vue')
        },
        {
            path: '/caisse',
            name: 'caisse',
            component: () => import('../pages/PayementPage.vue')
        },
        {
            path: '/mention',
            name: 'mention',
            component: () => import('../pages/MentionPage.vue')
        }
    ]
})

export default router
