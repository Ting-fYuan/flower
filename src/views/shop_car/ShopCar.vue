<template>
  <div class="shopcarView">购物车</div>
</template>

<script>
import { getAllcity } from "@/api/address/index";
export default {
  name: "ShopCar",
  data() {
    return {};
  },
  async created() {
    await getAllcity({ id: 1 });
  },
};
</script>

<style></style>
