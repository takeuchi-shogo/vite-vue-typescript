
import config from "./config";

class Api {
	getList(): Promise<any> {
		return config.get('/api')
	}
}


export default new Api()