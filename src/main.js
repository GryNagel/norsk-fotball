import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
