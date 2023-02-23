import { defineStore } from "pinia";

export const themeStore = defineStore({
  id: "themeStore",
  state: () => ({
    theme: false, //主题 darkTheme | light
    showLogo: true, //显示logo
    progressBar: true, //进度条
    isFullScreen: false, //是否全屏
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
