export default {
  //开启命名空间
  namespaced: true,
  state: {
    //存放细分类组件的请求的数据
    arr: [],
    //请求的类别的名字
    name: "",
  },
  mutations: {
    //获取请求数据
    getClassDate() {
      console.log("组件vuex");
    },
  },
};
