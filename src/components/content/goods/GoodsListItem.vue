<template>
  <div class="goods-item" @click="itemClick(goodsItem.goods_id)">
    <div class="goods-img">
      <img :src="goodsItem.goods_small_logo" alt="" @load="imageLoad" />
    </div>
    <div class="goods-info">
      <p>{{ goodsItem.goods_name }}</p>
      <span class="price">{{ goodsItem.goods_price }}</span>
      <span class="collect">{{ goodsItem.goods_id }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("ItemImageLoad");
    },
    itemClick(goods_id) {
      console.log(goods_id);
      this.$router.push({ path: "detail", query: { goods_id } });
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 48%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.goods-img {
  width: 100%;
  flex: 1;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  height: auto;
}

.goods-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
