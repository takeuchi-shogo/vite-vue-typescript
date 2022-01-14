<script setup lang="ts">

	defineProps<{ msg: string }>()

</script>

<template>
	<h1>{{ msg }}</h1>

	<a><router-link :to="{ name: 'index' }">Index</router-link></a>
	<a><router-link :to="{ name: 'login' }">Login</router-link></a>
	<a><router-link :to="{ name: 'todos' }">TodoList</router-link></a>

	<h1>vite + Vue + Typescript Sample</h1>

</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
