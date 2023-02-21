<script setup>
import useHomeStore from "@/stores/modules/home";

import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
// homeStore.fetchCategoriesData();
// homeStore.fetchHouselistData();
</script>

<template>
  <div class="home" ref="homeRef">
    <home-nav-bar></home-nav-bar>

    <div class="banner">
      <img src="@/assets/images/home/banner.webp" alt="" />
    </div>

    <home-search-box />
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
