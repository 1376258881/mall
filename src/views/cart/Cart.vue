<template>
  <div>
    <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{ length }})</div>
      </nav-bar>
    </div>
    <cart-list></cart-list>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: { NavBar, CartList, CartBottomBar },
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
/* .cart {
  height: 100vh;
} */
</style>
