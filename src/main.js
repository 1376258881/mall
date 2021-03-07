import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JsppUI from './libs/jspp-ui';
Vue.use(JsppUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
<<<<<<< HEAD
}).$mount('#app')
=======
  router,
}).$mount('#app')
>>>>>>> 50ac0df955af925964cfc82570c2ac1deba0ff1d
