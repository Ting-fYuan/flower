<!-- 购物车 -->
<template>
  <div class="shop-view-box">
    <com-head title="购物车"></com-head>
    <main>
      <div class="shop-car-box">
        <div class="shop" v-if="showShopList">有购物车</div>
        <div class="no-shop" v-else>
          <img
            class="no-shop-img"
            src="../../src/assets/images/cartback.png"
            alt="购物车没有商品"
          />
          <p>购物车暂时没有商品</p>
          <button>去逛逛</button>
        </div>
        <div class="like-more">
          <div class="like-more-title">
            <p>猜你喜欢</p>
          </div>
          <div class="like-more-main"></div>
        </div>
      </div>
    </main>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { guessLikeApi } from "@/api/shopCar";
import TabBar from "@/components/TabBar.vue";
export default {
  name: "ShopView",
  data() {
    return {
      showShopList: false,
    };
  },
  async created() {
    await guessLikeApi();
  },
  components: { TabBar },
};
</script>

<style lang="scss" scoped>
.shop-view-box {
  background-color: #e8ecef;
  height: 100vh;
  main {
    padding: 42px 0 0;
    .shop-car-box {
      .shop {
      }
      .no-shop {
        padding: 50px 0 0;
        width: 100vw;
        min-height: 260px;
        background: #ffffff;
        .no-shop-img {
          margin: 0 auto;
          width: 34%;
        }

        p {
          margin-top: 14px;
          font-size: 14px;
          text-align: center;
          color: #555555;
        }

        button {
          display: block;
          margin: 15px auto 0;
          width: 122px;
          height: 30px;
          border-radius: 15px;
          opacity: 1;
          background: rgba(136, 78, 34, 1);
          color: #fff;
          font-size: 14px;
        }
      }

      .like-more {
        margin-top: 15px;
        padding: 15px;
        background-color: #fff;

        .like-more-title {
          p {
            font-size: 18px;
            color: #555555;
          }
        }
        .like-more-main {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
