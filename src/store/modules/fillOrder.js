import { defaultAddressApi } from "@/api/address";

export default {
  // 填写订单 vuex
  namespaced: true,
  state: {
    chooseAddress: null,
  },
  getters: {},
  mutations: {
    // 修改选择的地址
    changeAddress(state, payload) {
      state.chooseAddress = payload;
    },
  },
  actions: {
    // 获取默认地址
    async getDeaultAddress(ctx) {
      try {
        // 没有选中地址才执行
        if (!ctx.state.chooseAddress) {
          const { result } = await defaultAddressApi();
          ctx.commit("changeAddress", result);
        }
      } catch (err) {
        return err;
      }
    },
  },
};
