import Vue from "vue";
import Vuex from 'vuex';
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";


//1.安装vuex
Vue.use(Vuex);
const state = {
    cartList: []
}
//2.创建store对象
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
//3.导出，挂载到vue实例上
export default store;