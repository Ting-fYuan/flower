<template>
  <div class="box">
    <div class="img">
      <img src="../assets/images/banner1_m.jpg.png" alt="" />
    </div>
    <main>
      <div class="title">{{ arr.name }}</div>
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
</template>

<script>
export default {
  name: "ClassRoute",
  data() {
    return {
      arr: [],
    };
  },
  created() {
    console.log("组件");
    setTimeout((item) => {
      console.log(item);
      //   console.log(this.$store.state.classflyStore);
      this.arr = this.$store.state.classflyStore;
    }, 1000);
  },
  methods: {
    toClassification(item) {
      console.log(item.id);
      this.$router.push({
        path: "/classification",
        query: { info: JSON.stringify(item) },
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
