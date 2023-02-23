import { defineStore } from "pinia";
export const userStore = defineStore({
  id: "userStore", //唯一
  state: () => ({
    token: "",
    userName: "",
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
