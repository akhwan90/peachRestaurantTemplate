import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/styles/main.style.css'
import { routes } from './router'
Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode:'history'
}) 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
