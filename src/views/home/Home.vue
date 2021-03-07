<template>
  <div>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">首页</div>
      </nav-bar>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: { NavBar },
  props: {},
  data() {
    return {};
  },
  created() {
    console.log(getHomeMultidata);
  },
  mounted() {},
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
