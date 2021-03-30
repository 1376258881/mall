<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <p class="info-title">{{ goods.goods_name }}</p>
    <div class="info-price">
      <span class="n-price">￥{{ goods.goods_price }}</span>
      <del class="o-price">￥{{ goods.is_del }}</del>
      <span v-if="goods.is_promote" class="discount">活动价</span>
    </div>
    <div class="info-other">
      <span>销量 {{ goods.goods_number }}</span>
      <span>收藏 {{ goods.hot_mumber }}</span>
      <span>退货补运费</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"> 7天无理由退货</span>
      <span class="info-service-item">72小时发货</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 10px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.base-info .info-service-item {
  font-size: 13px;
  color: #333;
}
</style>
