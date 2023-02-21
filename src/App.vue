<script setup>
import TabBar from "@/components/tab-bar/tabBar.vue";
import loading from "./components/loading/loading.vue";
</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component
          :is="Component"
          :key="route.meta.usePathKey ? route.path : undefined"
        />
      </keep-alive>
    </router-view>

    <tab-bar></tab-bar>
    <loading />
  </div>
</template>

<style scoped lang="scss"></style>
