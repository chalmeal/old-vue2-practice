import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import("./assets/sass/style.scss");

Vue.config.productionTip = false

import * as filters from "./filters";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
