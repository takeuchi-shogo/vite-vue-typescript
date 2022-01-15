
import config from "./config";

class Api {
	getList(): Promise<any> {
		return config.get('/')
	}

	create(data: any): Promise<any> {
		return config.post('/users', data)
	}
}


export default new Api()