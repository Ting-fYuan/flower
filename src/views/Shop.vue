<!-- 购物车 -->
<template>
  <div class="shop-view-box">
    <com-head :showBack="false" title="购物车"></com-head>
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
          <button @click="toIndex">去逛逛</button>
        </div>
        <div class="like-more">
          <div class="like-more-title">
            <p>猜你喜欢</p>
          </div>
          <div class="like-more-main">
            <div class="commodity" v-for="item in likeList" :key="item.id">
              <img :src="item.s_goods_photos[0].path" :alt="item.name" />
              <div class="ctn-bottom">
                <p class="goods-name">{{ item.name }}</p>
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
    </main>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { getShopCarApi, guessLikeApi } from "@/api/shopCar";
import TabBar from "@/components/TabBar.vue";
export default {
  name: "ShopView",
  data() {
    return {
      showShopList: false,
      // 猜你喜欢
      likeList: [],
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.loginStore.token;
    },
  },
  async created() {
    // 用户是否登录
    if (this.isLogin) {
      const res = await getShopCarApi();
      console.log(res);
    }
    // res.result.length = 0
    // 猜你喜欢
    const { result } = await guessLikeApi();
    this.likeList = result;
    console.log("猜你喜欢", result);
  },
  methods: {
    toIndex() {
      // 跳转至首页
      this.$router.push("index");
    },
  },
  components: { TabBar },
};
</script>

<style lang="scss" scoped>
.shop-view-box {
  height: 100vh;
  background-color: #e8ecef;
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
  }
}
</style>
