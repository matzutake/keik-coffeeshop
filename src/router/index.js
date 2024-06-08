import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MenuView from '@/views/MenuView.vue'
import store from '@/store/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: {
            title: 'Главная'
          }
        },
        {
          path: '/menu',
          name: 'menu',
          component: MenuView,
          meta: {
            title: 'Меню'
          }
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView,
          meta: {
            title: 'О нас'
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
