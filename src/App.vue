<template>
  <div id="app">
    <Home :items="items"></Home>
    <Swiper></Swiper>
    <!-- <carousel
      :autoplay="true"
      :duration="3000"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
    >
      <car-itme v-for="(item, index) of carData" :key="index">
        <img :src="require('./assets/img/')" alt="" />
      </car-itme>
    </carousel> -->
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Swiper from "./components/common/Swiper";

export default {
  name: "App",
  data() {
    return {
      carData: [{}],
      items: [
        {
          name: "IT互联网",
          child: [
            {
              name: "编辑语言",
              child: [
                { name: "java" },
                { name: "c#/ .net" },
                { name: "python" },
              ],
            },
            {
              name: "前端开发",
              child: [{ name: "jq" }, { name: "vue " }, { name: "react " }],
            },
            {
              name: "移动开发",
              child: [{ name: " android开发" }, { name: "IOS开发" }],
            },
            {
              name: "游戏开发",
              child: [
                { name: " phaser游戏开发" },
                { name: "webGL游戏开发", child: [{ name: "3D游戏" }] },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    Home,
    Swiper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
