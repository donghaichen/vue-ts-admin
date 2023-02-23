import { createRouter, createWebHistory } from "vue-router";
import { NProgressStart, NProgressDone } from "@/utils/nprogress";
import { userStore } from "@/pinia/modules/userStore";
import { themeStore } from "@/pinia/modules/themeStore";
import { nextTick } from "vue";
import { useTitle } from "@vueuse/core";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        title: "控制台",
      },
      component: () => import("@/views/Dashboard.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 1. 每个条件执行后都要跟上 next() 或 使用路由跳转 api 否则页面就会停留一动不动
  // 2. 要合理的搭配条件语句，避免出现路由死循环。
  const user = userStore();

  if (to.path !== "/login" && !user.token) {
    const query = { redirectPath: to.path };
    next({
      path: "/login",
      query: to.path === "/404" || !to.path ? {} : query,
    });
  }

  nextTick(() => {
    const title = useTitle();
    title.value =
      (to.meta.title || "App") + " - " + import.meta.env.VITE_APP_TITLE;
  }).then();

  const theme = themeStore();
  if (theme.progressBar) {
    NProgressStart();
  }

  // 登录后禁止手动跳转到login 必须要点击退出按钮 清空token
  if (to.path === "/login" && user.token) {
    next("dashboard");
  } else {
    next();
  }
});
router.afterEach(() => {
  console.log("NProgressDone");
  NProgressDone();
});
export default router;
