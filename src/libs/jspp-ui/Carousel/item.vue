<template>
  <transition>
    <div ref="carItem" class="carousel-item" v-if="index === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarItem",
  components: {},
  data() {
    return {
      selfIndex: this.$vnode.data.key,
      currentIndex: this.$parent.currentIndex,
    };
  },
  watch: {
    "$parent.currentIndex"(value) {
      this.currentIndex = value;
    },
  },
};
</script>

<style>
.carousel-item {
  position: absolute;
  top: 0;
  left: 30px;
  width: 100%;
  height: 100%;
  margin: 0 10px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
