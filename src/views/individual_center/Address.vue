<!-- 地址 -->
<template>
  <div class="address">
    <div class="addressHead">
      <van-icon name="arrow-left" color="#333333" class="arrowLeft" />
      <span>收货地址</span>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
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
  methods: {
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  height: 100%;
  background: #eaebef;
  .addressHead {
    width: 375px;
    height: 51px;
    opacity: 1;
    border-bottom: 1px solid rgba(243, 245, 247, 1);
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: flex-start; /* 左对齐 */
    .arrowLeft {
      line-height: 51px;
      font-size: 26px;
    }
    span {
      width: 80px;
      height: 51px;
      opacity: 1;
      color: rgba(85, 85, 85, 1);
      font-size: 16px;
      font-weight: 500;
      line-height: 51px;
      margin-left: auto; /* 居中对齐的样式 */
      margin-right: auto;
    }
  }
}

::v-deep .van-address-list {
  background: #eaebef;
  height: calc(100vh - 51px);
}
</style>
