<script setup lang="ts">
import { ref } from "vue";
import {
  darkTheme,
  NConfigProvider,
  zhCN,
  dateZhCN,
  NCard,
  NButton,
} from "naive-ui";
import type { GlobalTheme, NLocale, NDateLocale } from "naive-ui";

const theme = ref<GlobalTheme | null>(null);
const locale = ref<NLocale | null>(null);
const dateLocale = ref<NDateLocale | null>(null);
</script>
<template>
  <NConfigProvider
    :theme="theme"
    :locale="locale"
    :date-locale="dateLocale"
    inline-theme-disabled
  >
    <n-card>
      <n-button @click="theme = darkTheme"> 深色</n-button>
      <n-button @click="theme = null"> 浅色</n-button>
      <n-button
        @click="
          () => {
            locale = null;
            dateLocale = null;
          }
        "
      >
        英文
      </n-button>
      <n-button
        @click="
          () => {
            locale = zhCN;
            dateLocale = dateZhCN;
          }
        "
      >
        中文
      </n-button>
      <RouterView />
    </n-card>
  </NConfigProvider>
</template>

<style lang="less" scoped>
@prefixCls: ~"@{prefix}";
.@{prefixCls}-config-provider {
  width: 100%;
  height: 100%;
}
</style>
