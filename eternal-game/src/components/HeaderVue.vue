<script setup></script>

<template>
  <div class="min-h-24 bg-[url('/src/assets/img/bg-header.png')] bg-fixed">
    <ul class="flex flex-row justify-end space-x-4">
      <li class="text-red-600">
        <RouterLink :to="{ name: 'game' }">Игра</RouterLink>
      </li>
      <li class="text-red-600">
        <RouterLink :to="{ name: 'admin' }">Админка</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
