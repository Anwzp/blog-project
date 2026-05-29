<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <t-layout class="bg-background-page min-h-screen">
    <Header></Header>
    <t-content>
      <router-view></router-view>
    </t-content>
    <Footer></Footer>
  </t-layout>
</template>
