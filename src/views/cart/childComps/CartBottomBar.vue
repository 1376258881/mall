<template>
  <div class="cart-bottom-bar">
    <div class="cart-bottom-left">
      <CheckButton
        @click.native="checkClick"
        :is-checked="isSelectAll"
      ></CheckButton>
      <p>全选</p>
    </div>
    <div class="cart-bottom-center">合计:{{ price }}</div>
    <div class="cart-bottom-right" @click="clacClick">去计算({{ count }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  data() {
    return {
      checked: true,
      //   price: 1000,
      //   count: 2,
    };
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    price() {
      return (
        " ¥ " +
        this.cartList
          .filter((item) => item.checked == true)
          .reduce((previous, item) => {
            return previous + item.price * item.count;
          }, 0)
      );
    },
    count() {
      return this.cartList.filter((item) => item.checked == true).length;
    },
    isSelectAll() {
      if (!this.cartLength) {
        return false;
      }
      return this.cartList.every((item) => item.checked);
    },
  },
  methods: {
    checkClick() {
      let isSelectAll = this.isSelectAll;
      this.cartList.forEach((item) => (item.checked = !isSelectAll));
    },
    clacClick() {
      if (!this.cartLength) {
        this.$toast.show("请选择你需要结算的商品");
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 60px;
  display: flex;
  line-height: 60px;
}
.cart-bottom-left {
  display: flex;
  flex: 0 0 25%;
  align-items: center;
}
.cart-bottom-left p {
  margin-left: 20px;
}
.cart-bottom-center {
  flex: 0 0 46%;
}
.cart-bottom-right {
  width: 200px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>
