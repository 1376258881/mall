import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Profile = () => import('../views/profile/Profile.vue');
const Detail = () => import('../views/detail/Detail.vue');


const routes = [{
  path: '/',
  redirect: '/home', //重定向
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/detail',
  component: Detail
}];
const router = new VueRouter({
  routes,
  mode: 'history'
})
//replace  避免报错
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

//push 避免报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router