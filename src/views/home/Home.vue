<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">首页</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"> </recommend-view>
    <footer-view :floordata="floordata">123</footer-view>
  </div>
</template>

<script>
//请求数据
import {
  getHomeSwiperdata,
  getHomeCatitems,
  getHomeFloordata,
} from "network/home";

//功能组件
import NavBar from "components/common/navbar/NavBar.vue"; //顶部导航条

//子组件
import HomeSwiper from "./childComps/HomeSwiper"; //轮播
import RecommendView from "./childComps/RecommendView.vue";
import FooterView from "./childComps/FooterView";

export default {
  name: "Home",
  components: { NavBar, HomeSwiper, RecommendView, FooterView },
  props: {},
  data() {
    return {
      banners: [],
      recommends: [],
      floordata: [],
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
      console.log(res.message);
    });
  },
  mounted() {},
};
</script>

<style scoped>
#home {
  padding-top: 44px;
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
</style>
