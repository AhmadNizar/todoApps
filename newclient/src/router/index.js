import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Timeline from '@/components/Timeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: HelloWorld
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('tokenTodo')) {
          next({name: 'Login'})
        } else {
          next()
        }
      }
    }
  ]
})
