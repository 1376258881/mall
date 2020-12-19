<template>
  <div class="lists">
    <Item v-for="(v, i) in items" :key="i" :item="v"></Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "",
  components: { Item },
  data() {
    return {};
  },
  props: ["items"],
};
</script>

<style></style>
