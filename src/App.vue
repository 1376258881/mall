<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view v-if="isRouterShow" />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterShow: true,
    };
  },
  methods: {
    async reload() {
      this.isRouterShow = false;
      await this.$nextTick();
      this.isRouterShow = true;
    },
  },
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
