<template>
  <div class="shopcarView">
    <com-head title="标题"></com-head>
  </div>
</template>

<script>
import { getAllcity } from "@/api/address";

export default {
  name: "ShopCar",
  data() {
    return {};
  },
  async created() {
    const res = await getAllcity();
    console.log(res);
  },
};
</script>

<style></style>
