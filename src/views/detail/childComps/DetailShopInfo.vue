<template>
  <div class="detail-shop-info" v-if="Object.keys(goods).length !== 0">
    <div v-html="goods.goods_introduce"></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      let num = 0;
      let timer = setInterval(() => {
        if (num > 30) {
          clearInterval(timer);
        }
        this.$emit("imgLoad");
        num++;
      }, 100);
    });
  },
  watch: {},
};
</script>

<style scoped></style>
