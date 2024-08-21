<script>
export default {
  setup() {},
  data() {
    return {
      listParamers: [
        {name: "human", direction: "sssssssssssssssss"},
        {},
      ],
    };
  },
};
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-3 justify-items-center">
      <h1 class="flex justify-center">Админка</h1>
    </div>
    <ul class="col-span-3 grid grid-cols-3 gap-4">
      <li class="col-span-3 flex justify-between">
        <div>название</div>
        <div>описание</div>
        <div>редактировать</div>
      </li>
      <hr>
      <li
        v-for="el in listParamers"
        class="col-span-3 flex justify-between"
      >
        <div>{{ el.name }}</div>
        <div>{{ el.direction }}</div>
        <div><button>редактировать</button></div>
      </li>

    </ul>
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
