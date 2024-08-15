<script setup></script>

<template>
  <div class="min-h-screen bg-slate-400">
    <ul>
      <li><RouterLink :to="{ path: '/game-map' }">Map</RouterLink></li>
      <li><RouterLink :to="{ path: '/unit-data' }">Unit</RouterLink></li>
      <li><RouterLink :to="{ path: '/troop-data' }">Troop</RouterLink></li>
    </ul>
  </div>
</template>
