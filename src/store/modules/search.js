export default {
  namespaced: true,
  state: {
    result: [],
  },
  getters: {},
  mutations: {
    // 更新搜索结果
    updateResult(state, payload) {
      state.result = payload;
    },
  },
  actions: {},
};
