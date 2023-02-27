<template>
  <div class="logistics">
    <div class="logisticsHead">
      <com-head title="物流"></com-head>
    </div>
    <div class="logisticsContent">
      <van-steps direction="vertical" :active="active" active-color="#884e22">
        <van-step
          v-for="(item, index) in logisticsList"
          :key="index"
          center
          active-color="#884e22"
          @click="getIndex()"
          ><h3 v-if="item.address">【城市】{{ item.address }}</h3>
          <p>{{ item.context }}</p>
          <p v-if="item.phone">联系电话：{{ item.phone }}</p>
          <p>{{ item.time }}</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import { getLogistics } from "@/api/order/index";
export default {
  name: "LogisticsView",
  data() {
    return {
      active: 0,
      order_id: "",
      logisticsList: [],
    };
  },
  async created() {
    this.order_id = this.$route.query.id;
    try {
      let res = await getLogistics({ order_id: this.order_id });
      console.log(res.data);
      this.logisticsList = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getIndex() {
      console.log(123);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 13px;
  font-weight: 300;
  &:nth-child(3) {
    color: blue;
  }
}
</style>
