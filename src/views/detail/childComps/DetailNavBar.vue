<template>
  <div class="DetailChild">
    <nav-bar>
      <div slot="left" class="detailNavLeft" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="detailNav">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="itemClick(index)"
          :class="{ active: currentIndex == index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: { NavBar },
  data() {
    return {
      items: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detailNav {
  display: flex;
  justify-content: space-evenly;
  font-size: 24px;
}

.detailNavLeft {
  width: 100%;
  height: 100%;
}
.active {
  color: var(--color-high-text);
}
</style>
