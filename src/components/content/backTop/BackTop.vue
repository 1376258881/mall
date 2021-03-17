<template>
  <div class="backTop">
    <img src="../../../assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  components: {},
  data() {
    return {
      scroll: 0,
    };
  },
};
</script>

<style scoped>
.backTop {
  z-index: 10;
  position: fixed;
  bottom: 55px;
  right: 8px;
  width: 80px;
  height: 80px;
}
</style>
