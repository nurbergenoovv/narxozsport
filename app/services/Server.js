import axios from 'axios'
import { base_url } from './API'

class Server{
	async check_connection(){
		try {
            const response = await axios.get(`${base_url}/check`)
            return response.data.status === 'success'
        } catch (error) {
            console.error('Ошибка сервера:', error)
            throw error
        }
	}
    
}

export default new Server()