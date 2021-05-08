<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    show(message = "空内容", duration = 2000) {
      this.isShow = true;
      this.message = message;
      console.log(123);
      if (timer) {
        clearTimeout(timer);
      }
      let timer = setTimeout(() => {
        this.isShow = false;
        this.message = "";
        clearTimeout(timer);
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 999;
  font-size: 24px;
}
</style>
