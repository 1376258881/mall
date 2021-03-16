<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index == courrentIndex }"
      @click="courrentIndexChange(index)"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      courrentIndex: 0,
    };
  },
  methods: {
    courrentIndexChange(index) {
      this.courrentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 25px;
  height: 40px;
  line-height: 40px;
  position: sticky;
  top: 44px;
  z-index: 9;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
  padding-bottom: 0;
}
.tab-control-item.active span {
  border-bottom: 3px solid var(--color-heigh-text);
  color: var(--color-heigh-text);
}
</style>
