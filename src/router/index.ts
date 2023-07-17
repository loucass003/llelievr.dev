import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
        },
      ]
    },
    {
      path: '/blog/:id',
      component: () => import('@/components/layouts/BlogLayout.vue'),
      children: [
        {
          path: '',
          name: 'BlogPage',
          component: () => import('@/views/BlogPage.vue'),
        },
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
  },
})

export default router
