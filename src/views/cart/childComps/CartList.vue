<template>
  <scroll class="cart-list" ref="scroll">
    <cart-list-item
      v-for="(item, index) in list"
      :key="index"
      :itemInfo="item"
    ></cart-list-item>
  </scroll>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";

export default {
  name: "",
  components: { Scroll, CartListItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      list: "cartList",
    }),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px - 109px);
  overflow: hidden;
}
</style>
