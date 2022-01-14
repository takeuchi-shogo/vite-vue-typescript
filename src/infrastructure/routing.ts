
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '/src/interfaces/presenters/components/Home.vue';
import Index from '/src/interfaces/presenters/components/Index.vue';
import Login from '/src/interfaces/presenters/templates/Login.vue'

import NotFound from "/src/interfaces/presenters/components/NotFound.vue";
import TodoList from "/src/interfaces/presenters/templates/TodoList.vue";


const routers: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/hello',
		name: 'index',
		component: Index,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/todos',
		name: 'todos',
		component: TodoList
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: NotFound,
	},
];


const router = createRouter({
	history: createWebHistory(),
	routes: routers,
});


export default router;