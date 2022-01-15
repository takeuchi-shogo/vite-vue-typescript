
<script lang="ts">

	import { defineComponent } from "vue";
	import api from "../../../infrastructure/api";

	export default defineComponent({
		name: 'LoginForm',
		data() {
			return {
				user: {
					display_name: '',
					password: '',
				}
			}
		},
		methods: {
			login() {
				let data = {
					display_name: this.user.display_name,
				}
				api.create(data)
					.then(() => {
						console.log('ユーザーが作成されました')
					})
					.catch((e: Error) => {
        				console.log(e);
        			})
			}
		}
	})

</script>



<template>
	ここはログインフォームです
	<div>
		<form>
			<ul>
				<li>
					<label for="displayName">ユーザーネーム</label>
					<input
						type="text"
						id="displayName"
						v-model="user.display_name"
					>
				</li>
				<li>
					<label for="password">パスワード</label>
					<input
						type="password"
						id="password"
						v-model="user.password"
					>
				</li>
			</ul>
			<button @click="login">作成</button>
		</form>
	</div>
</template>