
import config from "./config";

class Api {
	getList(): Promise<any> {
		return config.get('/')
	}

	create(data: any): Promise<any> {
		return config.post('/users', data)
	}

	createTodo(data: any): Promise<any> {
		return config.post('/todos', data)
	}

	getTodoList() :Promise<any> {
		return config.get('/todos')
	}

	getTodo(id: any): Promise<any> {
		return config.get(`/todos/${ id }`)
	}
}


export default new Api()