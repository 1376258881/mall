<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//scroll组件必须要设定高度
import BScroll from "better-scroll";
import { debounce } from "common/utils";
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
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      //  pullUpLoad: {
      // threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
      //stop: 20 // 回弹停留在距离顶部20px的位置
      // },
      // observeDOM: true,
      // observeImage: true,
    });
    //监听滚动
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    //监听上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore", "上啦加载更多");
    });
  },
  methods: {
    scrollTo(x, y, timer = 300) {
      this.scroll && this.scroll.scrollTo(x, y, timer);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp(); //事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
    },
    refresh() {
      //刷新
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped></style>
