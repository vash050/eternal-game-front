<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./components/HeaderVue.vue";
</script>

<template>
  <div class="container mx-auto">
    <HeaderVue />

    <div><RouterView /></div>
  </div>
</template>

<style scoped></style>