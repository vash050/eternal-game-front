<script>

export default {
  setup() {
  },
  data() {
    return {
      listParamers: [
        {name: 'race', description: 'race unit', name_ob: 'units/race/races'},
        {name: 'grade', description: 'general grade', name_ob: 'general/grade/grades'},
      ],
    };
  },
};
</script>

<template>
	<div>
		<h1 class="flex justify-center">
			Админка
		</h1>

		<div class="flex justify-between">
			<div>
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
						<div class="pr-4">
							{{ el.name }}
						</div>
						<div class="px-8">
							{{ el.description }}
						</div>
						<div class="pl-2">
							<button>
								<router-link :to="{ name: 'page-skills', params: { el: el.name_ob}}">
									редактировать
								</router-link>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
