<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="detail-content"
      ref="scroll"
      @scroll="contentScroll"
      :probeType="3"
    >
      <detail-swiper :imgSwiper="imgSwiper" ref="swiper"></detail-swiper>
      <detail-base-info :goods="goods" ref="parmas"></detail-base-info>
      <detail-shop-info
        :goods="goods"
        @imgLoad="imgLoad"
        ref="shopImg"
      ></detail-shop-info>
      <goods-list :goods="goodList" ref="goods" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isBackShow"></back-top>
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
import DetailBottomBar from "./childComps/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop.vue";
//功能函数
import { debounce } from "common/utils";
//混入
import { itemListenerMixin, componentLoad } from "common/mixin";
import { BACK_POSITION } from "common/const";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  props: {},
  mixins: [itemListenerMixin],
  inject: ["reload"],
  data() {
    return {
      iid: null,
      imgSwiper: [],
      goods: {},
      goodList: [],
      themeTopEles: [],
      themeTopYs: [],
      currentIndex: 0,
      isBackShow: false,
      // getThemeTopY: null,
    };
  },
  created() {
    this.iid = this.$route.query;
    this.getDate();
    // this.getThemeTopY = debounce(() => {}, 50);
  },
  mounted() {},
  beforeRouteUpdate(to, from, next) {
    if (to.path.indexOf("detail") == 1) {
      this.iid = to.query;
      //判断是否为复用组件
      this.getDate();
      this.reload();
    }
    next();
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      //图片加载完后 , 获取元素
      // this.getThemeTopY();
    },
    getDate() {
      //根据iid请求数据
      getDetail(this.iid).then((res) => {
        this.imgSwiper = res.message.pics;
        this.goods = new Goods(res.message);
      });
      getDetailGoods(942, 1, 16).then((res) => {
        this.goodList = res.message.goods;
      });
    },
    titleClick(index) {
      this.themeTopEles = [
        this.$refs.swiper.$el,
        this.$refs.parmas.$el,
        this.$refs.shopImg.$el,
        this.$refs.goods.$el,
      ];
      this.$refs.scroll.scroll.scrollToElement(this.themeTopEles[index], 200);
      // this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    contentScroll(position) {
      this.themeTopYs = [
        this.$refs.swiper.$el.offsetTop,
        this.$refs.parmas.$el.offsetTop,
        this.$refs.shopImg.$el.offsetTop,
        this.$refs.goods.$el.offsetTop,
      ];

      let positionY = -position.y;
      this.themeTopYs.push(Number.MAX_VALUE);
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isBackShow = -position.y > BACK_POSITION;
      // for (let i = 0; i < length; i++) {
      //   if (
      //     this.currentIndex !== i &&
      //     ((i < length - 1 &&
      //       positionY >= this.themeTopYs[i] &&
      //       positionY < this.themeTopYs[i + 1]) ||
      //       (i === length - 1 && positionY >= this.themeTopYs[i]))
      //   ) {
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex;
      //   }
      // }
    },
    backClick() {
      //返回顶部
      this.$refs.scroll.scrollTo(0, 0);
    },
    addToCart() {
      const product = {};
      product.goods_id = this.goods.goods_id;
      product.title = this.goods.goods_name;
      product.price = this.goods.goods_price;
      product.image = this.imgSwiper[0].pics_big_url;
      this.$store.dispatch("addCart", product);
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
  overflow: hidden;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background: #fff;
}
.detail-content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
