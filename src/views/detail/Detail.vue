<template>
  <div>
    <div class="detail"></div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  components: {},
  props: {},
  data() {
    return {
      iid: null,
    };
  },
  created() {
    console.log(this.$route.query);
    // this.iid = this.$route
  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped></style>
