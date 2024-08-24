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
	<div>
		<h1>Административная страница</h1>
		<hr>
		<h3>параметр: {{ all_data }}</h3>
		<div>
			<div class="col-span-3 flex justify-between">
				<button>
					Редактировать
				</button>
				<button>
					Создать
				</button>
				<button>
					Просмотреть
				</button>
			</div>
		</div>
	</div>
</template>
