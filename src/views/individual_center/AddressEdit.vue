<template>
  <div class="addressEdit">
    <div class="editHead">
      <common-head title="新增收货地址"></common-head>
    </div>
    <div class="editContent">
      <van-address-edit
        show-set-default
        show-search-result
        save-button-text="保存并使用"
        tel-maxlength="11"
        @save="onSave"
      />
    </div>
  </div>
</template>

<script>
import CommonHead from "@/components/CommonHead.vue";
import { Toast } from "vant";
export default {
  components: { CommonHead },
  data() {
    return {};
  },
  methods: {
    onSave() {
      Toast("save");
    },
  },
};
</script>

<style lang="scss" scoped>
.addressEdit {
  width: 100%;
  height: 100%;
  background: #eaebef;
  .editContent {
    width: 100%;
    height: calc(100vh - 42px);
    margin-top: 45px;
  }
}

// 将vant默认的地区选择隐藏
::v-deep .van-cell--clickable {
  display: none;
}

::v-deep .van-button--danger {
  border: none;
  background: #884e22;
  // width: 50%;
}
</style>
