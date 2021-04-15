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
import { itemListenerMixin, componentLoad } from "common/mixin";
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
  inject: ["reload"],
  data() {
    return {
      iid: null,
      imgSwiper: [],
      goods: {},
      goodList: [],
      themeTopYs: [],
      currentIndex: 0,
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
      this.themeTopYs = [
        this.$refs.swiper.$el.offsetTop,
        this.$refs.parmas.$el.offsetTop,
        this.$refs.shopImg.$el.offsetTop,
        this.$refs.goods.$el.offsetTop,
      ];
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    contentScroll(position) {
      this.themeTopYs = [
        this.$refs.swiper.$el.offsetTop,
        this.$refs.parmas.$el.offsetTop,
        this.$refs.shopImg.$el.offsetTop,
        this.$refs.goods.$el.offsetTop,
      ];

      let positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        // if (
        //   this.currentIndex !== i &&
        //   positionY >= this.themeTopYs[i] &&
        //   positionY < this.themeTopYs[i + 1]
        // ) {
        //   this.currentIndex = i;
        //   // console.log(this.currentIndex);
        //   this.$refs.nav.currentIndex = this.currentIndex;
        // }

        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          console.log(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
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
