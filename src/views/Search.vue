<!-- 搜索 -->
<template>
  <div class="search">
    <div class="searchHead">
      <van-search
        v-model="value"
        placeholder="爱情鲜花"
        show-action
        action-text="搜索"
        shape="round"
      >
        <template>
          <van-icon name="arrow-left" size="33" slot="left" @click="goback()" />
        </template>
        <template #action>
          <div @click="Search()">搜索</div>
        </template>
      </van-search>
    </div>
    <!-- 历史记录 -->
    <div class="searchHistory">
      <div class="history">历史记录</div>
      <van-icon name="delete-o" size="36" class="delIcon" @click="delAll" />
      <div class="noHistory" v-if="history == ''">
        <van-empty
          image="search"
          image-size="100"
          description="暂无搜索记录~"
        />
      </div>
      <div
        class="historyText"
        v-else
        @click="handleClick"
        v-show="isHitoryEmpty"
      >
        <span
          class="historySpan"
          v-for="(item, index) in history"
          :data-value="item"
          :key="index"
          >{{ item }} <van-icon name="cross" @click="dleItem(item)"
        /></span>
      </div>
    </div>
    <van-divider :style="{ color: '#1989fa', borderColor: 'pink' }" />
    <!-- 热搜 -->
    <div class="hotSearch">
      <div class="hot">热门搜索</div>
      <div class="like-more-main">
        <div class="commodity" v-for="item in hotSearch" :key="item.id">
          <img
            :src="item.s_goods_photos[0].path"
            :alt="item.name"
            @click="goSearch(item.name)"
          />
          <div class="ctn-bottom" @click="handleClick">
            <p class="goods-name" :data-value="item.name">{{ item.name }}</p>
            <div class="ctn-bottom-box">
              <p class="price">￥ {{ item.price }}</p>
              <p class="sale">
                销量{{ item.sold_num && item.sold_num.slice(0, 6) }}笔
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goodsSearch, hotSearch } from "@/api/search/index";
import { Toast } from "vant";
export default {
  name: "SearchView",
  data() {
    return {
      value: "",
      history: [],
      hotSearch: [],
    };
  },
  async created() {
    this.loadHistory();
    let res = await hotSearch(); //获取热搜
    this.hotSearch = res.result;
  },
  computed: {
    //控制是否显示历史记录，大于0则显示
    isHitoryEmpty() {
      return this.history;
    },
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async Search() {
      if (this.value === "") return false;
      let res = await goodsSearch({ name: this.value });
      // 添加到历史记录
      this.history.unshift(this.value);
      let historySet = new Set(this.history);
      this.history = Array.from(historySet); //历史记录去重
      const maxHistoryLength = 8; //限制历史搜索数量
      if (this.history.length > maxHistoryLength) {
        this.history.splice(
          maxHistoryLength - 1,
          this.history.length - maxHistoryLength
        );
      }
      localStorage.setItem("searchHistory", JSON.stringify(this.history));
      if (res.result.count === 0) {
        Toast("没有该商品信息，请尝试更换关键词");
        this.value = "";
      } else if (res.result.count != 0) {
        this.$router.push("/category");
      }
    },
    loadHistory() {
      const history = localStorage.getItem("searchHistory");
      if (history) {
        this.history = JSON.parse(history);
      }
    },
    // 点击图片进行搜索
    goSearch(e) {
      this.value = e;
      this.Search(this.value);
    },
    // 点击下面文字进行搜索
    handleClick(event) {
      const childDiv = event.target;
      if (
        childDiv.classList.contains("goods-name") ||
        childDiv.classList.contains("historySpan")
      ) {
        this.value = childDiv.dataset.value;
        this.Search(this.value);
      }
    },
    // 点击垃圾桶移除全部历史记录
    delAll() {
      localStorage.removeItem("searchHistory");
      this.history = [];
    },
    // 点击x号移除历史记录
    dleItem(e) {
      console.log(e);
      const index = this.history.indexOf(e);
      if (index > -1) {
        this.history.splice(index, 1);
        localStorage.setItem("searchHistory", JSON.stringify(this.history));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100vh;
  background: #e9ecf0;
  // 历史记录
  .searchHistory {
    width: 100%;
    height: 200px;
    .history {
      width: 80px;
      height: 21px;
      font-size: 15px;
      padding-left: 10px;
      padding-top: 20px;
      display: inline-block;
    }
    .delIcon {
      float: right;
      top: 10%;
      right: 5%;
    }
    .noHistory {
      width: 100%;
      height: 120px;
      text-align: center;
    }
    .historyText {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .historySpan {
        height: 21px;
        font-size: 13px;
        text-align: center;
        line-height: 21px;
        background: #fff;
        flex-basis: calc(50% - 20px);
        margin: 10px;
      }
    }
  }
  // 热搜
  .hotSearch {
    .hot {
      width: 60px;
      height: 21px;
      font-size: 15px;
      padding-left: 10px;
      padding-top: 8px;
    }
    .like-more-main {
      display: flex;
      margin-top: 15px;
      padding-bottom: 30%;
      justify-content: space-between;
      flex-wrap: wrap;

      .commodity {
        margin-bottom: 10px;
        width: 165px;
        height: 235px;
        box-shadow: 0 5px 10px 0 #dee2e5;

        img {
          width: 100%;
          height: 165px;
        }
        .ctn-bottom {
          display: flex;
          margin: 0 5px;
          justify-content: space-between;
          flex-direction: column;
          height: 30%;
          .goods-name {
            margin-top: 20px;
            font-size: 14px;
            color: #333333;
          }
          .ctn-bottom-box {
            display: flex;
            margin: 5px 0;
            justify-content: space-between;
            .price {
              font-size: 14px;
              color: #ff734c;
              font-weight: 600;
            }
            .sale {
              font-size: 12px;
              color: #999999;
            }
          }
        }
      }
    }
  }
}

::v-deep .van-search__action {
  background: #ff734c;
  color: #ffffff;
  border-radius: 50%;
}
//历史记录为空时vant的样式
::v-deep .van-empty {
  height: 200px;
}
</style>
