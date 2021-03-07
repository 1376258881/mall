<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  components: {},
  props: {
    autoplay: {
      //是否自动播放
      type: Boolean,
      default: true,
    },
    duration: {
      //播放延时
      type: Number,
      default: 3000,
    },
    initial: {
      //默认展示第几张图片
      type: Number,
      default: 0,
    },
    hasDot: {
      //圆点
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentIndex: this.initial,
      itemLen: 0,
    };
  },
  methods: {
    autoPlay() {
      if (this.autoplay) {
        t = setInterval(() => {
          this.setIndex("next");
        }, this.duration);
      }
    },
    setIndex(dir) {
      switch (dir) {
        case "next":
          this.currentIndex += 1;
          if (this.currentIndex == this.itemLen) {
            this.currentIndex = 0;
          }
      }
    },
  },
};
</script>

<style></style>
