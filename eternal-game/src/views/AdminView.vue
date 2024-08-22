<script setup>
import AdminLeftBar from "@/components/AdminLeftBar.vue"

</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-span-1 justify-items-center min-h-screen bg-slate-400">
      <AdminLeftBar />
    </div>
    <div class="flex">
      <RouterView />
    </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
