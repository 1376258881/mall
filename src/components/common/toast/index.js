import Toast from "./Toast";
const obj = {};
obj.install = function (Vue) {
    // 1.构建组件构造器
    const ToastCompon = Vue.extend(Toast);
    //2.new的方式 创建组件对象
    const toast = new ToastCompon();
    //3.将组件对象挂载到某一个对象上
    toast.$mount(document.createElement('div'));
    //4.将toast.$el添加到body中
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast;
}
export default obj;