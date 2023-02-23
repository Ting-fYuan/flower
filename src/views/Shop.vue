<!-- 购物车 -->
<template>
  <div class="shop-view-box">
    <com-head title="购物车"></com-head>
    <main>
      <div class="shop-car-box">
        <div class="shop" v-if="showShopList">有购物车</div>
        <div class="no-shop" v-else>没有购物车</div>
      </div>
    </main>
    购物车
    <TabBar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
export default {
  name: "ShopView",
  data() {
    return {
      showShopList: false,
    };
  },
  components: { TabBar },
};
</script>

<style lang="scss" scoped>
.shop-view-box {
  background-color: #e8ecef;
  height: 100vh;
  main {
    padding: 42px 0 0;
    .shop-car-box {
      .shop {
      }
      .no-shop {
        width: 100vw;
        min-height: 260px;
        background: #ffffff;
      }
    }
  }
}
</style>
