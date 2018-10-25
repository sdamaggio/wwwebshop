import Vue from 'vue'
import Router from 'vue-router'
import HomeItem from '@/components/HomeItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeItem',
      component: HomeItem
    }
  ]
})
