
<script lang="ts">

	import { defineComponent } from 'vue';
	import api from '../../../infrastructure/api';

	// let users: any
	// users = api.getList()

	export default defineComponent({
		name: 'Main',
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
						this.users = response.data
						// console.log(response.data)
					})
			}
		},
		mounted() {
			this.getUsers()
		}
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
</template>