<script setup>
import LeftBar from "./LeftBar.vue";
import RightBar from "./RightBar.vue";
import GameMap from "../views/GameMap.vue";
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/6"><LeftBar /></div>
    <div class="basis-4/6"><RouterView /></div>
    <div class="basis-1/6"><RightBar /></div>
  </div>
</template>
