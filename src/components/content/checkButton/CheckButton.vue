<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
  width: 22px;
  height: 22px;
}
.check {
  border-color: red;
  background-color: #ff5777;
  width: 22px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #ccc;
}
</style>
