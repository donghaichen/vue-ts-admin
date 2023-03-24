<template>
  <NMessageProvider>
    <RouterView />
  </NMessageProvider>
</template>
<style lang="less">
html, body, #app {
  width: 100vw;
  height: 100vh;
}

</style>
<script setup lang="ts">
import { NMessageProvider } from "naive-ui";
</script>
