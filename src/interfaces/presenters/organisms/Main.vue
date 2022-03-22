
<script lang="ts">

	import { defineComponent } from 'vue';
	import api from '../../../infrastructure/api';
	import TodoForm from '/src/interfaces/presenters/molecules/TodoForm.vue'
	import TodoItem from '/src/interfaces/presenters/molecules/TodoItem.vue'


	export default defineComponent({
		name: "Main",
		data() {
			return {
				users: [],
			}
		},
		methods: {
			getUsers() {
				// console.log('ボタンが押されました')
				api.getList()
					.then((response) => {
					this.users = response.data;
					// console.log(response.data)
				});
			}
		},
		mounted() {
			this.getUsers();
		},
		components: { TodoForm, TodoItem }
	})

</script>


<template>
	ここはメイン画面です
	<button @click="getUsers">再取得する</button>
	<ul>
		<li v-for="user in users">
			{{ user }}
		</li>
	</ul>
	<TodoForm/>
	<TodoItem/>
</template>