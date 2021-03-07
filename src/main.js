import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JsppUI from './libs/jspp-ui';
Vue.use(JsppUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')