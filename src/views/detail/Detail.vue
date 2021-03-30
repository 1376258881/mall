<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="detail-content" ref="scroll">
      <detail-swiper :imgSwiper="imgSwiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :goods="goods" @imgLoad="imgLoad"></detail-shop-info>
      <goods-list :goods="goodList" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";

//数据请求
import { getDetail, Goods, getDetailGoods } from "network/detail";
//子组件
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
//功能函数
import { debounce } from "common/utils";
//混入
import { itemListenerMixin } from "common/mixin";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    GoodsList,
  },
  props: {},
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      imgSwiper: [],
      goods: {},
      goodList: [],
      itemImgListener: null,
    };
  },
  created() {
    this.iid = this.$route.query;
    //根据iid请求数据
    getDetail(this.iid).then((res) => {
      this.imgSwiper = res.message.pics;
      this.goods = new Goods(res.message);
    });
    getDetailGoods(942, 1, 16).then((res) => {
      this.goodList = res.message.goods;
    });
  },
  mounted() {},
  // beforeRouteUpdate(to, from, next) {},
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
  filter: {},
  computed: {},
  destroyed() {
    //解除绑定 不再监听加载图片后的刷新
    this.$bus.$off("itemImageLoad", this.itemImageListener);
  },
};
</script>

<style scoped>
#detail {
  /*覆盖底部导航 */
  position: relative;
  z-index: 10;
  background: #fff;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background: #fff;
}
.detail-content {
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>
