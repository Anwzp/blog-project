<template>
  <t-header
    class="bg-background-container grid grid-cols-[80px_minmax(0,1fr)_2rem] h-[60px] w-full place-items-center"
  >
    <div class="container-logo"></div>
    <div class="flex items-center justify-center h-full">
      <router-link
        to="/home"
        class="px-[32px] h-full flex items-center"
        v-for="tab in tabs"
        :key="tab.value"
        :to="tab.path"
        :class="{
          'text-primary': tab.active,
          'border-b-2 border-color-primary': tab.active,
        }"
      >
        {{ tab.name }}
      </router-link>
    </div>
    <div></div>
  </t-header>
</template>
<script lang="ts" setup>
interface Tab {
  name: string;
  active: boolean;
  value: string;
  path: string;
}

const tabs: Tab[] = [
  { name: "首页", active: true, value: "1", path: "/home" },
  { name: "博客", active: false, value: "2", path: "/blog" },
  { name: "项目", active: false, value: "3", path: "/projects" },
  { name: "标签", active: false, value: "4", path: "/tags" },
  { name: "联系", active: false, value: "5", path: "/contact" },
];
</script>
<style scoped></style>
