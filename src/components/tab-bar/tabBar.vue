<template>
  <van-tabbar v-model="activeItem">
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :to="item.path"
    >
      <template #default>
        <span>{{ item.text }}</span>
      </template>
      <template #icon="props">
        <img
          :src="
            props.active
              ? getAssetsUrl(item.imageActive)
              : getAssetsUrl(item.image)
          "
          alt=""
        />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
import { getAssetsUrl } from "@/utils/load_assets.js";

import tabbarData from "@/assets/data/tabbar";

const activeItem = ref();
</script>

<style lang="scss" scoped>
.tab-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  border-top: 1px solid #f3f3f3;

  &-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
