import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageNotFound from '@/components/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,

    beforeEnter (to, from, next) {
      // Check if thread id exists, redirect if doesn't
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)

      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }

]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
