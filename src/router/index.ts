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
      path: '/project/:id',
      component: () => import('@/components/layouts/ProjectLayout.vue'),
      children: [
        {
          path: '',
          name: 'ProjectPage',
          component: () => import('@/views/SlimeVRPage.vue'),
        },
        // {
        //   path: 'diy-bluetooth-speaker',
        //   name: 'DIYBluetoothPage',
        //   component: () => import('@/views/SlimeVRPage.vue'),
        // },
        // {
        //   path: 'launch.it',
        //   name: 'LaunchitPage',
        //   component: () => import('@/views/SlimeVRPage.vue'),
        // },
        // {
        //   path: 'face-tracker',
        //   name: 'FaceTrackerPage',
        //   component: () => import('@/views/SlimeVRPage.vue'),
        // },
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
  ]
})

export default router
