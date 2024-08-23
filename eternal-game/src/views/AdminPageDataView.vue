<script>

export default {
  name: 'AdminPageData',
  data() {
    return {
      el: ''
    };
  },
  // TODO: исправить метод, чтобы отрисовывал не только при создании страницы
  created() {
    const skill_el=this.$route.params.el;
    if (skill_el){
      this.el= skill_el;
    }
  }
};

</script>

<template>
	<div>
		<h1>Административная страница</h1>
		<hr>
		<h3>параметр: {{ el }}</h3>
		<div class="col-span-3 flex justify-between">
			<router-link
				class="pr-4"
				to="/admin/data/edit"
			>
				Редактировать
			</router-link>
			<router-link
				class="px-8"
				to="/admin/data/create"
			>
				Создать
			</router-link>
			<router-link
				class="pl-2"
				to="/admin/data/view/:el"
			>
				Просмотреть
			</router-link>
		</div>
	</div>
</template>
