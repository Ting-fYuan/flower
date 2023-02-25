<!-- 全部订单 -->
<template>
  <div class="order">
    <div class="orderHead">
      <com-head title="我的订单"></com-head>
    </div>
    <div class="orderTab">
      <keep-alive>
        <van-tabs v-model="active">
          <van-tab
            v-for="item in titleList"
            :key="item.id"
            :title="item.title"
            :to="{ name: 'myorder', params: { id: item.id } }"
          ></van-tab>
        </van-tabs>
      </keep-alive>

      <div class="orderContent">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderView",
  data() {
    return {
      active: 0,
      titleList: [
        {
          id: 1,
          title: "待付款",
        },
        {
          id: 2,
          title: "派送中",
        },
        {
          id: 3,
          title: "待评价",
        },
        {
          id: 4,
          title: "已完成",
        },
      ],
    };
  },
  mounted() {
    // 从 localStorage 获取当前选中的 tab
    const activeTab = localStorage.getItem("routeId");
    if (activeTab) {
      this.active = parseInt(activeTab);
    }
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  height: 100%;
  .orderTab {
    width: 100%;
    height: calc(100vh - 42px);
    margin-top: 45px;
  }
}
</style>
