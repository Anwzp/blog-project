<template>
  <t-header
    class="bg-background-container grid grid-cols-[80px_minmax(0,1fr)_2rem] h-[60px] w-full place-items-center"
  >
    <div class="container-logo"></div>
    <div>
      <router-link
        to="/home"
        v-for="tab in tabs"
        :key="tab.value"
        :to="tab.value"
        :class="{ 'text-primary': tab.active }"
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
}

const tabs: Tab[] = [
  { name: "首页", active: true, value: "/home" },
  { name: "博客", active: false, value: "/blog" },
  { name: "项目", active: false, value: "/projects" },
  { name: "标签", active: false, value: "/tags" },
  { name: "联系", active: false, value: "/contact" },
];
</script>
<style scoped></style>
