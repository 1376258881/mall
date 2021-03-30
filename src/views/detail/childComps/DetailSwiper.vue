<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in imgSwiper" :key="item.pics_id">
      <img :src="item.pics_big_url" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
export default {
  name: "DetailSwiper",
  props: {
    imgSwiper: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { Swiper, SwiperItem },
  data() {
    return {};
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
