import axios from "axios";

export default {
  state: {
    amount: null,
    topupHistory: null
  },
  mutations: {
    updateWallet(state, { amount, topupHistory }) {
      state.amount = amount;
      state.topupHistory = topupHistory;
    }
  },
  actions: {
    async topUp({ commit }, payload) {
      await axios.post("/wallet/topup", payload).then(responsePacket => {
        console.log(responsePacket.data);

        const amount = responsePacket.data.amount;
        const topupHistory = responsePacket.data.topupHistory;

        commit("updateWallet", { amount, topupHistory });
      });
    }
  }
};
