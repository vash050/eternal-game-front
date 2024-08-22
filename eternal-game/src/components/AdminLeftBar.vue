<script>
import { RouterLink } from "vue-router";

export default {
  setup() {},
  data() {
    return {
      listParamers: [{ name: "human", direction: "ssssssssssss" }, {}],
    };
  },
};
</script>

<template>
  <div>
    <h1 class="flex justify-center">Админка</h1>

    <div class="flex justify-between">
      <div>
        <ul class="col-span-3 grid grid-cols-3 gap-4">
          <li class="col-span-3 flex justify-between">
            <div>название</div>
            <div>описание</div>
            <div>редактировать</div>
          </li>
          <hr />
          <li
            v-for="el in listParamers"
            class="col-span-3 flex justify-between"
          >
            <div class="pr-4">{{ el.name }}</div>
            <div class="px-8">{{ el.direction }}</div>
            <div class="pl-2">
              <button>
                <RouterLink :to="{ path: '/admin/data-page' }"
                  >редактировать</RouterLink
                >
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
