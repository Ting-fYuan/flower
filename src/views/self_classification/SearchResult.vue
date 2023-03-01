<template>
  <div class="result">
    <div class="resultHead">
      <com-head title="搜索结果"></com-head>
    </div>
    <div class="resultContent" v-for="(item, index) in result" :key="index">
      <img
        :src="item.s_goods_photos[0].path"
        :alt="item.name"
        @click="goDetail(item.id)"
      />
      <div class="ctn-bottom" @click="goDetail(item.id)">
        <p class="goods-name" :data-value="item.name">{{ item.name }}</p>
        <div class="ctn-bottom-box">
          <p class="price">￥{{ item.price }}</p>
          <p class="sale">销量{{ item.sold_num && item.sold_num }}笔</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      return this.$store.state.searchStore.result;
    },
  },
  methods: {
    goDetail(e) {
      this.$router.push({
        path: "/detail",
        query: {
          id: e,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  .resultContent {
    width: 50%;
    img {
      height: 165px;
    }
    .goods-name {
      margin-bottom: 20px;
      font-size: 16px;
      color: #333333;
    }
    .ctn-bottom-box {
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 16px;
        color: #ff734c;
        font-weight: 600;
      }
      .sale {
        font-size: 12px;
        color: #999999;
        padding-right: 30px;
      }
    }
  }
}
</style>
