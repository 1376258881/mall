<template>
  <div class="page">
    <div class="carousel">
      <div class="inner">
        <div v-for="(item, index) in imgUrls" :key="index">
          <transition>
            <div class="carousel-item" v-if="index === currentIndex">
              <img :src="item" alt="" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      currentIndex: 0,
      imgUrls: [
        "https://img.hbhcdn.com/zhuanti/jh-img-orig-ga_1329336533799247872_600_300_25174.jpg",
        "https://img.hbhcdn.com/zhuanti/jh-img-orig-ga_1329337053091831808_600_300_36103.jpg",
        "https://img.hbhcdn.com/zhuanti/jh-img-orig-ga_1329337017066954752_600_300_37129.jpg",
      ],
    };
  },
  methods: {
    autoPlay() {
      setInterval(() => {
        this.setIndex();
      }, 3000);
    },
    setIndex() {
      this.currentIndex++;
      if (this.currentIndex == this.imgUrls.length) {
        this.currentIndex = 0;
      }
    },
  },
  mounted() {
    this.autoPlay();
  },
};
</script>

<style>
.carousel {
  width: 600px;
  height: 300px;
  position: relative;
  margin: 0 auto;
}
.inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.carousel-item {
  position: absolute;
  top: 0;
  left: 30px;
  width: 100%;
  height: 100%;
  margin: 0 10px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s linear;
}
.v-enter-active {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0);
}
.v-leave-active {
  transform: translateX(0);
}
.v-leave-to {
  transform: translateX(-100%);
}
</style>
