import { getAddressApi } from "@/api/address";

export default {
  // 地址 vuex
  namespaced: true,
  state: {
    addressData: null,
  },
  getters: {},
  mutations: {},
  actions: {
    // 获取用户地址
    async getUserAddress() {
      try {
        const res = await getAddressApi();
        console.log(res);
      } catch (err) {
        return err;
      }
    },
  },
};
