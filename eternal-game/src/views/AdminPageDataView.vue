<script>

import axios from 'axios';

export default {
  name: 'AdminPageData',
  data() {
    return {
      el: '',
      all_data: [],
    };
  },

  // TODO: исправить метод, чтобы отрисовывал не только при создании страницы
  created() {
    const skill_el = this.$route.params.el;
    if (skill_el) {
      this.el = skill_el;
    }

  },
  mounted() {
    this.getAllDate();
  },
  methods: {
    async getAllDate() {
      const env = this;
      await axios.get('http://0.0.0.0:8000/api/v1/units/race/races', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
          .then(function (response) {
            response.data.forEach((element) => {
              env.all_data.push(element);
            });
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  },
};

</script>

<template>
	<div class="container">
		<h1>Административная страница</h1>
		<hr>
		<div class="">
			<div class="" v-for="item in all_data" :key="item.id">
				<div class="flex grid-rows-6 justify-between">
					<p class="text-sm">{{ item.name }}</p>
					<p class="text-sm">{{ item.description }}</p>

					<button class="bg-indigo-500 text-xs border-2 border-black rounded-full">
						Редактировать
					</button>
					<button class="bg-red-500 text-xs border-2  rounded-full border-black">
						Удалить
					</button>
				</div>
				<hr/>
			</div>
		</div>
		<button class="bg-indigo-500 text-xs border-2 border-black  rounded-full">
			Создать
		</button>
	</div>
</template>
