import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { base_url } from './API'

class News {
	async getAllNews() {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/news/get/all`, {
				token: token,
			})
			return response.data
		} catch (error) {
			console.error('Ошибка сервера:', error)
			throw error
		}
	}

	async viewedNotification() {
		const user_id = await AsyncStorage.getItem('id')
		console.log(user_id)
		try {
			const response = await axios.post(`${base_url}/notification/viewed`, {
				user_id: user_id,
			})
			return response.data
		} catch (error) {
			console.error('Ошибка сервера:', error)
			throw error
		}
	}
}

export default new News()
