<template>
  <div class="search">
    <h2>开始时间: {{ $route.query.startDate }}</h2>
    <h2>结束时间: {{ $route.query.endDate }}</h2>
    <h2>当前城市: {{ $route.query.currentCity }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.query);
</script>

<style lang="scss" scoped></style>
