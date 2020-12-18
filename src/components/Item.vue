<template>
  <ul>
    <li>
      <div>{{ item.name }}</div>
      <Item v-for="(v, i) in item.child" :key="i" :item="v"></Item>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Item",
  components: {},
  data() {
    return {};
  },
  props: ["item"],
};
</script>

<style></style>
