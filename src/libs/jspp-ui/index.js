//UI组件库的入库文件
//UI组件
//轮播图组件
import Carousel from './Carousel';
import CarItem from './Carousel/item.vue';
let JsppUI = {};
JsppUI.install = function (Vue) {
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarItem.name, CarItem);
}
export default JsppUI;