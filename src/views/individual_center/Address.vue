<!-- 地址 -->
<template>
  <div class="address">
    <div class="addressHead">
      <common-head title="收货地址"></common-head>
    </div>
    <div class="addressList">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        add-button-text="+新建地址"
      />
    </div>
  </div>
</template>

<script>
import CommonHead from "@/components/CommonHead.vue";
export default {
  components: { CommonHead },
  name: "AddressView",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  created() {},
  methods: {
    onAdd() {
      this.$router.push("/addressEdit");
    },
    onEdit() {
      this.$router.push("/addressEdit");
    },
  },
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  height: 100%;
  background: #eaebef;
  .addressList {
    width: 100%;
    height: calc(100vh - 42px);
    margin-top: 45px;
  }
}

::v-deep .van-button--danger {
  border: none;
  background: #884e22;
}
</style>
