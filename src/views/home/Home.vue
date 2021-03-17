<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">首页</div></nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"> </recommend-view>
      <footer-view :floordata="floordata">123</footer-view>
      <tab-control
        :titles="[{ title: '流行' }, { title: '精选' }, { title: '新款' }]"
        @itemClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
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
  },
  props: {},
  data() {
    return {
      banners: [],
      recommends: [],
      floordata: [],
      goods: {
        939: { page: 0, list: [] },
        926: { page: 0, list: [] },
        942: { page: 0, list: [] },
      },
      currentType: "939",
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
    this.getHomeGoods(939, 1);
    //精选
    this.getHomeGoods(926, 1);
    //新款
    this.getHomeGoods(942, 1);
  },
  methods: {
    getHomeGoods(type, numpage) {
      const page = this.goods[type + ""].page + 1;
      getHomeGoods(type, page, 20).then((res) => {
        this.goods[type + ""].list.push(...res.message.goods);
        this.goods[type + ""].page += 1;
      });
    },
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  mounted() {},
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
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
