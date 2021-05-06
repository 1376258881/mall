<template>
  <div>
    <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{ length }})</div>
      </nav-bar>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: { NavBar },

  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
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
</style>
