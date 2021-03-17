<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {},
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    console.log(this.probeType);
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //监听滚动
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    //监听上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore", "上啦加载更多");
      // setTimeout(() => {
      //   this.scroll.finishPullUp();
      // }, 2000);
    });
  },
  methods: {
    scrollTo(x, y, timer = 300) {
      this.scroll.scrollTo(x, y, timer);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped></style>
