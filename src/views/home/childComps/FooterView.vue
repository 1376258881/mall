<template>
  <div class="footer">
    <div class="footer_group" v-for="(item, index) in floordata" :key="index">
      <div class="floor_title">
        <img :src="item.floor_title.image_src" alt="" />
      </div>
      <div class="floor_list">
        <a
          :href="itemImg.navigator_url"
          class=""
          v-for="itemImg in item.product_list"
          :key="itemImg.image_src"
        >
          <img :src="itemImg.image_src" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterView",
  props: {
    floordata: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.floor_title {
  padding: 10px 0;
}
.floor_title img {
  width: 100%;
  height: auto;
}
.floor_list img {
  height: 100%;
}
.floor_list a {
  float: left;
  height: auto;
  width: 33.3%;
}
.floor_list a:nth-child(2),
.floor_list a:nth-child(3) {
  border-bottom: 10px solid #fff;
}
.floor_list a:nth-last-child(-n + 4) {
  height: calc(33.33vw * 386 / 232 / 2);
  border-left: 10px solid #fff;
}
.footer_group {
  overflow: hidden;
}
</style>
