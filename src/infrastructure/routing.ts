
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import Index from '../components/Index.vue';
import Login from '/src/interfaces/presenters/templates/Login.vue'

import NotFound from "../components/NotFound.vue";


const routers: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: HelloWorld,
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