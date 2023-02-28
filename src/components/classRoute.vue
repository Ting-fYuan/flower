<template>
  <div class="box">
    <van-skeleton title :row="3" :loading="loading" />
    <div class="box2">
      <div class="img">
        <img src="../assets/images/banner1_m.jpg.png" alt="" />
      </div>
      <main>
        <div class="title">{{ name }}</div>

        <ul>
          <li
            v-for="(item, index) in arr"
            :key="index"
            @click="toClassification(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassRoute",
  data() {
    return {
      loading: true,
      name: "",
      arr: [],
    };
  },
  // computed: {
  //   classList() {
  //     return this.$store.state.classflyStore;
  //   },
  // },
  created() {
    setTimeout((item) => {
      console.log(item);
      this.arr = this.$store.state.classflyStore;
      this.name = this.$store.state.classflyStore.name;
    }, 700);
    //
    // console.log(this.$store.state.classflyStore.name);
    //
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    toClassification(item) {
      // console.log(item.id);
      this.$router.push({
        path: "/classification",
        query: {
          id: item.id,
          name: item.name,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  background-color: white;
  .img {
    width: 272px;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  main {
    width: 272px;
    height: 235px;
    border: 1px solid rgba(233, 236, 240, 1);
    box-sizing: border-box;
    margin-top: 18px;
    .title {
      height: 35px;
      line-height: 35px;
      color: rgba(85, 85, 85, 1);
      margin-left: 10px;
      font-size: 16px;
      font-weight: 600;
      text-align: left;
    }
    ul {
      width: 100%;
      height: 200px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      li {
        width: 136px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: rgba(102, 102, 102, 1);
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
