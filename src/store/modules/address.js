import { getAddressApi, getAllcityApi } from "@/api/address";

export default {
  // 地址 vuex
  namespaced: true,
  state: {
    // 城市列表
    cityList: JSON.parse(sessionStorage.getItem("cityList")) || [],
    // 地址列表
    addressData: [],
  },
  getters: {
    // 获取地址
    getAddressList(state) {
      // 数据做处理兼容 vant
      return state.addressData.map((item) => {
        item.tel = item.phone;
        item.address = item.area_name + item.desc;
        if (item.default_set == 1) {
          item.isDefault = true;
        } else item.isDefault = false;
        return item;
      });
    },
  },
  mutations: {
    // 更新地址
    updateAddress(state, payload) {
      state.addressData = payload;
    },
    // 更新城市地址
    updateCity(state, payload) {
      state.cityList = payload;
      sessionStorage.setItem("cityList", JSON.stringify(payload));
    },
  },
  actions: {
    // 获取用户地址
    async getUserAddress(ctx) {
      try {
        // 没有地址再请求
        if (ctx.state.addressData.length === 0) {
          const { result } = await getAddressApi();
          ctx.commit("updateAddress", result);
        }
      } catch (err) {
        return err;
      }
    },
    // 获取所有城市
    async getAllcity(ctx) {
      // 有数据不请求
      if (ctx.state.cityList.length === 0) {
        const { result } = await getAllcityApi();
        ctx.commit("updateCity", result);
      }
    },
  },
};