import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '../routers/index'
import VueCompositionAPI from '@vue/composition-api'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCompositionAPI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
