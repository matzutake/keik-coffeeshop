import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          meta: {
            title: 'Главная'
          },
          component: () => import('@/views/nav/Home.vue')
        },
        {
          path: '/menu',
          name: 'menu',
          meta: {
            title: 'Меню'
          },
          component: () => import('@/views/nav/Menu.vue')
        },
        {
          path: '/about',
          name: 'about',
          meta: {
            title: 'О нас'
          },
          component: () => import('@/views/nav/About.vue')
        },
        {
          path: 'contacts',
          name: 'contacts',
          meta: {
            title: 'Контакты'
          },
          component: () => import('@/views/nav/Contacts.vue')
        },
        {
          path: 'basket',
          name: 'basket',
          meta: {
            title: 'Корзина'
          },
          component: () => import('@/views/nav/Basket.vue')
        },
        {
          path: '/:catchAll(.*)',
          redirect: () => {
            return '/'
          }
        }
      ]
    }
  ]
})

router.afterEach((to) => {
  if (to.meta.title) {
    store.commit('pageTitle', to.meta.title)
  }
})

export default router
