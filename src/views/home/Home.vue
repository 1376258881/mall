<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">首页</div></nav-bar>
    <tab-control
      :titles="[{ title: '流行' }, { title: '精选' }, { title: '新款' }]"
      @itemClick="tabClick"
      ref="tabControl1"
      v-show="isFixed"
      class=""
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScrollTop"
      :probeType="3"
      :pullUpLoad="true"
      @loadMore="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"> </recommend-view>
      <footer-view :floordata="floordata">123</footer-view>
      <tab-control
        :titles="[{ title: '流行' }, { title: '精选' }, { title: '新款' }]"
        @itemClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackShow"></back-top>
  </div>
</template>

<script>
//请求数据
import {
  getHomeSwiperdata,
  getHomeCatitems,
  getHomeFloordata,
  getHomeGoods,
} from "network/home";

//功能组件
import NavBar from "components/common/navbar/NavBar.vue"; //顶部导航条

//子组件
import HomeSwiper from "./childComps/HomeSwiper"; //轮播
import RecommendView from "./childComps/RecommendView.vue";
import FooterView from "./childComps/FooterView";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

//功能函数
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FooterView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  props: {},
  data() {
    return {
      banners: [],
      recommends: [],
      floordata: [],
      goods: {
        926: { page: 0, list: [] },
        939: { page: 0, list: [] },
        942: { page: 0, list: [] },
      },
      isBackShow: false,
      currentType: "926",
      isFixed: false,
      saveY: 0,
    };
  },
  created() {
    getHomeSwiperdata().then((res) => {
      this.banners = res.message;
    });
    getHomeCatitems().then((res) => {
      this.recommends = res.message;
    });
    getHomeFloordata().then((res) => {
      this.floordata = [...res.message];
    });
    //流行
    this.getHomeGoods(926, 1);
    //精选
    this.getHomeGoods(939, 1);
    //新款
    this.getHomeGoods(942, 1);
  },
  methods: {
    getHomeGoods(type, numpage) {
      const page = this.goods[type + ""].page + 1;
      getHomeGoods(type, page, 10).then((res) => {
        this.goods[type + ""].list.push(...res.message.goods);
        this.goods[type + ""].page += 1;
        //下拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl1.courrentIndex = index;
      this.$refs.tabControl2.courrentIndex = index;
      //滚动到元素位置
      this.$refs.scroll.scroll.scrollToElement(this.$refs.tabControl2.$el, 200);
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScrollTop(position) {
      this.isBackShow = -position.y > 1000;
      let tabControlTop = this.$refs.tabControl2.$el.getBoundingClientRect()
        .top;
      this.isFixed = tabControlTop <= 44;
    },
    loadMore() {
      this.getHomeGoods(this.currentType, 1);
    },
    ItemImageLoad() {
      const REFRESH = debounce(this.$refs.scroll.refresh, 200);
      this.$bus.$on("ItemImageLoad", () => {
        REFRESH();
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  mounted() {
    this.ItemImageLoad();
  },
  activated() {
    //创建时跳到获取保留的位置,并刷新下页面
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //离开时保留滚动位置
    this.saveY = this.$refs.scroll.getScrollY();
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  padding-bottom: 49px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  z-index: 9;
}
.content {
  /* height: calc(100vh - 93px); */
  overflow: hidden;
  position: fixed;
  top: 44px;
  bottom: 49px;
  z-index: 10;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
