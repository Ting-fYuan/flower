<template>
  <div>
    <ClassRoute></ClassRoute>
  </div>
</template>

<script>
import ClassRoute from "@/components/classRoute.vue";
export default {
  name: "MaterialView",
  components: { ClassRoute },
};
</script>

<style lang="scss" scoped>
div {
  background-color: white;
}
</style>
