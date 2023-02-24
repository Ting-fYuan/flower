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
    <!-- 热搜 -->
    <div class="hotSearch">
      <div class="hot">热门搜索</div>
      <div class="hotText" @click="handleClick">
        <div
          class="hotSpan"
          v-for="item in hotSearch"
          :key="item.id"
          :data-value="item.name"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <!-- 历史记录 -->
    <div class="searchHistory" v-show="isHitoryEmpty">
      <div class="history">历史记录</div>
      <div class="historyText" @click="handleClick">
        <span
          class="historySpan"
          v-for="(item, index) in history"
          :data-value="item"
          :key="index"
          >{{ item }} <van-icon name="cross" @click="dleItem(item)"
        /></span>
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
      return this.history.length > 0;
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
    // 点击下面文字进行搜索
    handleClick(event) {
      const childDiv = event.target;
      if (
        childDiv.classList.contains("hotSpan") ||
        childDiv.classList.contains("historySpan")
      ) {
        this.value = childDiv.dataset.value;
        this.Search(this.value);
      }
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
  // 热搜
  .hotSearch {
    width: 100%;
    height: 80px;
    .hot {
      width: 60px;
      height: 21px;
      font-size: 15px;
      padding-left: 10px;
      padding-top: 8px;
    }
    .hotText {
      .hotSpan {
        display: inline-block;
        width: 80px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
        background: #fff;
        margin: 5px 10px;
      }
    }
  }
  // 历史记录
  .searchHistory {
    width: 100%;
    height: 150px;
    padding-top: 38px;
    .history {
      width: 60px;
      height: 21px;
      font-size: 15px;
      padding-left: 10px;
      padding-top: 20px;
    }
    .historyText {
      display: flex;
      flex-wrap: wrap;
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
}

::v-deep .van-search__action {
  background: #ff734c;
  color: #ffffff;
  border-radius: 50%;
}
</style>
