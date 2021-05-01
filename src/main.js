import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JsppUI from './libs/jspp-ui';
import store from "./store"
Vue.use(JsppUI);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')