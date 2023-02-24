<!-- 子分类 -->
<template>
  <div class="SearchPages">
    <com-head title="子分类"></com-head>
    <van-tabs v-model="active">
      <van-tab title="综合">
        <div class="Content">
          <p></p>
          <div>
            <p>永恒回忆</p>
            <p><span>￥329</span> <span>销量16022笔</span></p>
          </div>
        </div>
        <div></div>
      </van-tab>
      <van-tab title="销量">内容 2</van-tab>
      <van-tab title="价格">内容 3</van-tab>
      <van-tab title="筛选">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { SearchDetails } from "@/api/search";
export default {
  name: "ClassificationView",
  mounted() {
    this.getClassifyGoods();
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    // 请求子类下的商品
    async getClassifyGoods() {
      try {
        let SearchRes = await SearchDetails(2602);
        console.log(SearchRes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.SearchPages {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 42px;
  background-color: #eaebef;
  .Content {
    margin: 4px;
    border-radius: 0px 0px 6px 6px;
    width: 165px;
    height: 220px;
    background-color: #fff;
    > p {
      width: 165px;
      height: 165px;
      background-color: pink;
    }
  }
}
</style>
