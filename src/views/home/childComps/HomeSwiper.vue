<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.goods_id">
        <a :href="item.image_src">
          <img :src="item.image_src" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { SwiperItem, Swiper } from "components/common/swiper"; //轮播图
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { SwiperItem, Swiper },
  data() {
    return {};
  },
};
</script>

<style scoped >
</style>
