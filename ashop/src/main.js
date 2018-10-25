// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Home from './components/HomeItem'
import Contacts from './components/ContactsItem'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/contacts', component: Contacts}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id=app>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
    </ul>
    <router-view></router-view>
  </div>

  `
}).$mount('#app')
