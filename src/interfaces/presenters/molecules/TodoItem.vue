
<script lang="ts">

	import { defineComponent } from "vue";
import api from "../../../infrastructure/api";


	export default defineComponent({
		name: 'TodoItem',
		data() {
			return {
				todos: [],
			}
		},
		methods: {
			getTodo() {
				api.getTodoList()
					.then((res) => {
						console.log('作成されました')
						this.todos = res.data
					})
					.catch((e: Error) => {
						console.log(e)
					})
			}
		},
		mounted() {
			this.getTodo()
		},
	})

</script>


<template>

	<div v-for="todo in todos">
		<p>{{ todo }}</p>
	</div>

</template>