<template>
  <div class="box">
    <div class="img">
      <img src="../assets/images/banner1_m.jpg.png" alt="" />
    </div>
    <main>
      <div class="title">{{}}</div>
      <ul>
        <li>1</li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: "ClassRoute",
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
