// User.js
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { base_url } from './API'

class User {
	async login(formData) {
		try {
			const response = await axios.post(`${base_url}/user/signin`, formData)
			return response
		} catch (error) {
			console.error('Ошибка входа:', error)
			throw error
		}
	}

	async register(formData) {
		try {
			const response = await axios.post(`${base_url}/user/signup`, formData)
			return response
		} catch (error) {
			console.error('Ошибка регистрации:', error)
			throw error
		}
	}

	async information() {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/user/information/token`, {
				token: token,
			})
			return response.data
		} catch (error) {
			console.error('Ошибка информаций:', error)
			throw error
		}
	}

	async updateData(formData) {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/user/update`, {
				token: token,
				...formData,
			})
			return response.data
		} catch (error) {
			console.error('Ошибка обновлений:', error)
			throw error
		}
	}
}

export default new User()
