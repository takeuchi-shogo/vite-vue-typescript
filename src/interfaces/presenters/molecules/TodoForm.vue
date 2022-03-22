
<script lang="ts">

	import { defineComponent } from "vue";
	import api from "../../../infrastructure/api";


	export default defineComponent({
		name: 'TodoForm',
		data() {
			return {
				todo: {
					title: '',
					discription: '',
					done: false,
				}
			}
		},
		methods: {
			create() {
				let data = {
					title: this.todo.title,
					discription: this.todo.discription,
					done: this.todo.done,
				}
				api.createTodo(data)
					.then((res) => {
						console.log('created todo!!')
					})
					.catch((e: Error) => {
						console.log(e)
					})
				
			}
		},
	})

</script>


<template>

	<form>
		<label>
			TODOタイトル
		</label>
		<input
			type="text"
			v-model="todo.title"
		>
		<label>
			詳細
		</label>
		<input
			type="text"
			v-model="todo.discription"
		>
		<button>作成</button>
	</form>

</template>