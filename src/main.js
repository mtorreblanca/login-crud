import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BoostrapVue from 'bootstrap-vue'
import { firestorePlugin } from 'vuefire'

Vue.use(BoostrapVue)
Vue.config.productionTip = false
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
