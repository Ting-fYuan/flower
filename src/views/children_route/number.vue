<template>
  <div>
    <ClassRoute></ClassRoute>
  </div>
</template>

<script>
import { indexImg } from "@/api/indexImg/index";
import ClassRoute from "@/components/classRoute.vue";
export default {
  name: "NumberView",
  components: { ClassRoute },
  created() {
    indexImg({})
      .then((res) => {
        // console.log(res.result[2]);
        this.$store.state.classflyStore = res.result[3].children;
        // console.log(this.$store.state.classflyStore.arr);
        this.$store.state.classflyStore.name = res.result[3].name;
        // console.log(this.$store.state.classflyStore.name);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: white;
}
</style>
