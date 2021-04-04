import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from '../routers/index'
import VueCompositionAPI from '@vue/composition-api'
import BootstrapVue from "bootstrap-vue";
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueCompositionAPI);
Vue.use(BootstrapVue)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
