<template>
  <div class="recommend">
    <div
      v-for="item in recommends"
      :key="item.image_src"
      class="recommend-item"
    >
      <a :href="item.navigator_url">
        <img :src="item.image_src" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 128px;
  height: 140px;
  margin-bottom: 10px;
}
</style>
