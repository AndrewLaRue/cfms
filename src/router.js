import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: loadPage('FormsPage')
  },
  {
    path: '/fra',
    name: 'FRA',
    component: loadPage('FraYouthPage')
  },
  {
    path: '/history',
    name: 'History',
    component: loadPage('HistoryPage')
  },
  {
    path: '/newsletters',
    name: 'Newsletters',
    component: loadPage('NewslettersPage')
  },
  {
    path: '/protected',
    name: 'Protected',
    component: loadPage('ProtectedPage')
  },
  {
    path: '/shows',
    name: 'Shows',
    component: loadPage('ShowsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
