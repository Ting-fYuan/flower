<template>
  <div>
    <ClassRoute></ClassRoute>
  </div>
</template>

<script>
import { indexImg } from "@/api/indexImg/index.js";
import ClassRoute from "@/components/classRoute.vue";
export default {
  name: "UseView",
  components: { ClassRoute },
  // watch: {
  //   route(newValue) {
  //     console.log(newValue);
  //   },
  // },
  created() {
    indexImg({})
      .then((res) => {
        // console.log(res.result[0]);
        this.$store.state.classflyStore = res.result[0].children;
        // console.log(this.$store.state.classflyStore.arr);
        this.$store.state.classflyStore.name = res.result[0].name;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log(to.query);
  //   next();
  // },
};
</script>

<style lang="scss" scoped>
div {
  background-color: white;
}
</style>
