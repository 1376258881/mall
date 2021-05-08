import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JsppUI from './libs/jspp-ui';
import Toast from "components/common/toast/index"
import store from "./store"
import Fastclick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.use(JsppUI);
Vue.use(Toast);
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
});

Fastclick.attach(document.body);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')