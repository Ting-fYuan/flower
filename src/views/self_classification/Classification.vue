<!-- 子分类 -->
<template>
  <div class="SearchPages">
    <com-head title="子分类"></com-head>
    <van-tabs
      v-model="active"
      @click="getSortData"
      color="#894E22"
      line-width="180px"
      line-height="4px"
      :animated="true"
      :swipeable="true"
      :lazy-render="true"
      title-active-color="#894E22"
      title-inactive-color="#888"
    >
      <van-tab title="综合" name="综合">
        <div class="ContentBox">
          <div v-for="goodsInfo of ClassifyGoodsList" :key="goodsInfo.id">
            <img :src="goodsInfo['s_goods_photos'][0].path" />
            <div>
              <p>{{ goodsInfo.name }}</p>
              <p>
                <span>
                  <b>￥{{ goodsInfo.sale_price }}</b>
                  <i>￥{{ goodsInfo.price }}</i>
                </span>
                <span>销量 {{ goodsInfo.sold_num }} 笔</span>
              </p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="销量" name="销量">
        <div class="ContentBox">
          <div v-for="goodsInfo of ClassifyGoodsList" :key="goodsInfo.id">
            <img :src="goodsInfo['s_goods_photos'][0].path" />
            <div>
              <p>{{ goodsInfo.name }}</p>
              <p>
                <span>
                  <b>￥{{ goodsInfo.sale_price }}</b>
                  <i>￥{{ goodsInfo.price }}</i>
                </span>
                <span>销量 {{ goodsInfo.sold_num }} 笔</span>
              </p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="价格" name="价格">价格</van-tab>
      <van-tab title="筛选" name="筛选">筛选</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { SearchDetails } from "@/api/search";
export default {
  name: "ClassificationView",
  data() {
    return {
      active: "综合",
      ClassifyGoodsList: [],
    };
  },
  mounted() {
    this.getClassifyGoods();
  },

  methods: {
    // 请求子类下的商品
    async getClassifyGoods() {
      try {
        let SearchRes = await SearchDetails(2602);
        this.ClassifyGoodsList = SearchRes.result;
        console.log("初始化数据", this.ClassifyGoodsList);
      } catch (error) {
        console.log(error);
      }
    },

    // @获取销量数据
    getSortData(index, title) {
      switch (title) {
        case "综合":
          console.log("综合", index);
          break;
        case "销量": {
          console.log("销量", index);
          break;
        }
        case "价格":
          this.ClassifyGoodsList = this.ClassifyGoodsList.sort((a, b) => {
            return a.sale_price - b.sale_price;
          });
          console.log(this.ClassifyGoodsList);
          console.log("价格", index);
          break;
        default:
          console.log("筛选", index);
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.SearchPages {
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  padding-top: 42px;
  background-color: #eaebef;
  .ContentBox {
    padding: 4px 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      margin: 4px;
      border-radius: 0px 0px 6px 6px;
      width: 165px;
      height: 220px;
      background-color: #fff;
      > img {
        width: 165px;
        height: 165px;
        background-color: pink;
      }
      // 信息区域
      > div {
        margin-top: 10px;
        padding: 0px 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        > p:first-of-type {
          height: 20px;
          opacity: 1;
          color: rgba(51, 51, 51, 1);
          font-size: 14px;
          font-weight: 400;
          font-family: "PingFang SC";
          text-align: left;
        }
        > p:last-of-type {
          display: flex;
          justify-content: space-between;
          > span:first-of-type {
            height: 20px;
            opacity: 1;
            color: rgba(255, 115, 76, 1);
            font-size: 14px;
            font-family: "PingFang SC";
            text-align: left;
            b {
              font-weight: 600;
            }
            i {
              margin-left: 6px;
              vertical-align: bottom;
              color: rgba(153, 153, 153, 1);
              font-size: 10px;
              text-decoration: line-through;
            }
          }
          > span:last-of-type {
            display: inline-block;
            height: 17px;
            opacity: 1;
            color: rgba(153, 153, 153, 1);
            font-size: 12px;
            font-weight: 400;
            font-family: "PingFang SC";
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
