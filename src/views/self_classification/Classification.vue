<!-- 子分类 -->
<template>
  <div class="SearchPages">
    <com-head :title="this.$route.query.name">
      <template slot="header-right"> 123 </template>
    </com-head>
    <div :class="topShow" @click="SetTop">
      <i class="iconfont icon-zhiding"></i>
    </div>
    <van-tabs
      v-model="active"
      @click="getSortData"
      @scroll="ControllerTopSetting"
      color="#894E22"
      :sticky="true"
      :animated="true"
      :swipeable="true"
      :lazy-render="true"
      title-active-color="#894E22"
      title-inactive-color="#888"
    >
      <!-- 综合区间 -->
      <van-tab title="综合" name="综合">
        <template slot="title">
          <div class="vanTitle">
            <p>
              <i class="iconfont icon-huacai"></i>
            </p>
            <i>综合</i>
          </div>
        </template>
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

      <!-- 销量区间 -->
      <van-tab title="销量" name="销量">
        <template slot="title">
          <div class="vanTitle">
            <i>销量</i>
            <p>
              <i
                class="iconfont icon-shangjiantou"
                :class="saleNumberArrowUp"
              ></i>
              <i
                class="iconfont icon-xiajiantou"
                :class="saleNumberArrowDown"
              ></i>
            </p>
          </div>
        </template>
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

      <!-- 价格区间 -->
      <van-tab title="价格" name="价格">
        <template slot="title">
          <div class="vanTitle">
            <i>价格</i>
            <p>
              <i
                class="iconfont icon-shangjiantou"
                :class="salePriceArrowUp"
              ></i>
              <i
                class="iconfont icon-xiajiantou"
                :class="salePriceArrowDown"
              ></i>
            </p>
          </div>
        </template>
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

      <!-- 筛选区间 -->
      <van-tab title="筛选" name="筛选">
        <template slot="title">
          <div class="vanTitle">
            <p>
              <i class="iconfont icon-shaixuanguolv"></i>
            </p>
            <i>筛选</i>
          </div>
        </template>
        <div class="ContentBox">
          <ul>
            <li v-for="parentClass of ClassifyNamesList" :key="parentClass.id">
              <h4>{{ parentClass.name }}</h4>
              <div class="labelName">
                <span
                  v-for="childrenClass of parentClass.children"
                  :key="childrenClass.id"
                  >{{ childrenClass.name }}</span
                >
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { SearchDetails } from "@/api/search";
import { indexImg } from "@/api/indexImg";
export default {
  name: "ClassificationView",
  data() {
    return {
      active: "综合",
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      ClassifyGoodsList: [],
      ClassifyNamesList: [],
      topShow: "backTop backTopHidden", // 控制显示与隐藏置顶按钮
      // @ 控制升序和降序
      saleNumberSort: true, //销量
      salePriceSort: true, //价格
      // @控制升序和降序的样式
      saleNumberArrowUp: "", //销量上箭头
      saleNumberArrowDown: "", //销量下箭头

      salePriceArrowUp: "", //价格上箭头
      salePriceArrowDown: "", //价格下箭头
    };
  },
  mounted() {
    // todo:首次进入页面的数据渲染
    this.getClassifyGoods();
    console.log(this.$route.query.name, this.$route.query.id);
  },

  methods: {
    // todo:请求子类下的商品
    async getClassifyGoods() {
      try {
        let SearchRes = await SearchDetails(this.$route.query.id);
        this.ClassifyGoodsList = SearchRes.result;
        console.log("初始化数据", this.ClassifyGoodsList);
      } catch (error) {
        console.log(error);
      }
    },

    // todo:获取到所有的商品分类
    async getAllClassify() {
      try {
        let AllClassify = await indexImg();
        this.ClassifyNamesList = AllClassify.result.slice(0, -1);
        console.log(AllClassify);
      } catch (error) {
        console.log(error);
      }
    },

    // todo:获取销量数据
    getSortData(title) {
      switch (title) {
        case "综合":
          this.saleNumberSort = true; // @初始化图标样式
          this.salePriceSort = true;
          this.ClearStyle();
          this.getClassifyGoods(); //@更新数据
          console.log("综合");
          break;
        case "销量":
          this.salePriceSort = true;
          if (this.saleNumberSort) {
            this.ClassifyGoodsList = this.ClassifyGoodsList.sort((a, b) => {
              return b.sold_num - a.sold_num;
            });
            this.ClearStyle();
            this.saleNumberArrowUp = "activeStyle";
            this.saleNumberArrowDown = "unactiveStyle";
            this.saleNumberSort = !this.saleNumberSort;
            console.log("销量升序", this.ClassifyGoodsList);
          } else {
            this.ClassifyGoodsList = this.ClassifyGoodsList.sort((a, b) => {
              return a.sold_num - b.sold_num;
            });
            this.ClearStyle();
            this.saleNumberArrowUp = "unactiveStyle";
            this.saleNumberArrowDown = "activeStyle";
            this.saleNumberSort = !this.saleNumberSort;
            console.log("销量降序", this.ClassifyGoodsList);
          }
          break;

        case "价格":
          this.saleNumberSort = true;
          if (this.salePriceSort) {
            this.ClassifyGoodsList = this.ClassifyGoodsList.sort((a, b) => {
              return a.sale_price - b.sale_price;
            });
            this.ClearStyle();
            this.salePriceArrowUp = "activeStyle";
            this.salePriceArrowDown = "unactiveStyle";
            this.salePriceSort = !this.salePriceSort;
            console.log("升序价格", this.ClassifyGoodsList);
          } else {
            this.ClassifyGoodsList = this.ClassifyGoodsList.sort((a, b) => {
              return b.sale_price - a.sale_price;
            });
            this.ClearStyle();
            this.salePriceArrowUp = "unactiveStyle";
            this.salePriceArrowDown = "activeStyle";
            this.salePriceSort = !this.salePriceSort;
            console.log("降序价格", this.ClassifyGoodsList);
          }
          break;

        default:
          console.log("筛选");
          this.saleNumberSort = true; // @初始化图标样式
          this.salePriceSort = true;
          this.ClearStyle();
          // todo:获取到样式的类型
          this.getAllClassify();
          break;
      }
    },

    // @置空样操作
    ClearStyle() {
      this.saleNumberArrowUp = "";
      this.saleNumberArrowDown = "";

      this.salePriceArrowUp = "";
      this.salePriceArrowDown = "";
    },

    // @设置置顶操作
    SetTop() {
      scrollTo({ top: 0, behavior: "smooth" });
    },
    ControllerTopSetting() {
      if (scrollY > 400) {
        this.topShow = "backTop backTopShow";
      } else {
        this.topShow = "backTop backTopHidden";
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
  // background-color: #eaebef;

  // @置顶
  .backTop {
    position: fixed;
    right: 30px;
    bottom: 110px;
    z-index: 999;
    i {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      border: 2px solid #894e22;
      font-size: 20px;
      color: #894e22;
    }

    // @置顶按钮隐藏
    &.backTopHidden {
      transition: all 0.5s;
      transform: translateX(80px);
    }

    // @置顶按钮隐藏
    &.backTopShow {
      transition: all 0.5s;
      transform: translateX(0px);
    }
  }
  // @选项卡标题区域
  .vanTitle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    // todo:标签
    > p {
      height: 20px;
      // background-color: pink;
      display: flex;
      flex-direction: column;
      > i {
        box-sizing: border-box;
        font-size: 16px;
        &.icon-shangjiantou {
          display: inline-block;
          box-sizing: border-box;
          margin-top: -2px;
          height: 7px;
          font-size: 10px;
          // background-color: skyblue;
        }
        &.icon-xiajiantou {
          font-size: 10px;
          // color: #888;
        }
        // 激活下箭头的样式
        &.activeStyle {
          color: #894e22;
        }
        &.unactiveStyle {
          color: #888;
        }
      }
    }
    // todo:文字
    > i {
      margin-left: 4px;
    }
  }

  // @内容区域
  .ContentBox {
    padding: 4px 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      margin: 4px;
      width: 165px;
      height: 220px;
      border-radius: 0px 0px 6px 6px;
      background-color: #fff;
      box-shadow: 1px 1px 8px #9d9d9d;
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
    ul {
      display: flex;
      flex-direction: column;

      li {
        h4 {
          margin: 6px;
          font-size: 20px;
          color: #894e22;
        }
        > .labelName {
          width: 100%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          span {
            margin: 6px;
            padding: 8px 6px;
            display: inline-block;
            color: #000;
            font-size: 16px;
            background-color: white;
          }
        }
      }
    }
  }
}
</style>
