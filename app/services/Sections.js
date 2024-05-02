import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { base_url } from './API.js'

class Section {
	async getAllSections() {
		const user_id = await AsyncStorage.getItem('id')
		try {
			const response = await axios.post(`${base_url}/sections/all/${user_id}`)
			return response.data
		} catch (error) {
			console.error('Ошибка сервера:', error)
			throw error
		}
	}

	async subscribeToSection(section_id) {
		const user_id = await AsyncStorage.getItem('id')
		try {
			const response = await axios.post(
				`${base_url}/sections/subscribe/${user_id}/${section_id}`
			)
			return response.data
		} catch (error) {
			console.error('Ошибка при бронировани секций сервера:', error)
			throw error
		}
	}

	async unsubscribeSection(section_id) {
		const user_id = await AsyncStorage.getItem('id')
		try {
			const response = await axios.post(
				`${base_url}/sections/unsubscribe/${user_id}/${section_id}`
			)
			return response.data
		} catch (error) {
			console.error('Ошибка при отписани секций сервера:', error)
			throw error
		}
	}

	async getUserSubscribedSections() {
		const user_id = await AsyncStorage.getItem('id')
		try {
			const response = await axios.post(`${base_url}/sections/${user_id}`)
			return response.data
		} catch (error) {
			console.error('Ошибка при получений подписаных секций сервера:', error)
			throw error
		}
	}

	async getTrainerSections() {
		const user_id = await AsyncStorage.getItem('id')
		try {
			const response = await axios.post(`${base_url}/trainer/schedules`, {
				user_id: user_id,
			})
			return response.data
		} catch (error) {
			console.error('Ошибка при получении тренера секций сервера:', error)
			throw error
		}
	}

	async getStudentCheckList() {
		const user_id = await AsyncStorage.getItem('id')
		try {
			const response = await axios.post(`${base_url}/trainer/schedules/students`, {
                user_id: user_id,
            })
            return response.data
		} catch (e) {
			console.log(JSON.stringify(e))
			console.error('Ошибка при получении тренера секций сервера:', e)
			throw e
		}
	}

	async getStudentList(section_id, section_date_id){
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/trainer/schedules/students/check`, {
                token: token,
				section_id: section_id,
				section_date_id: section_date_id
            })
            return response.data
		} catch (e) {
			console.error('Ошибка при получении тренера секций сервера:', e)
			throw e
		}
	}

	async changeStatus(status, visit_id){
		const token = await AsyncStorage.getItem('token')
        try {
            const response = await axios.post(`${base_url}/trainer/schedule/visit/add`, {
                token: token,
                visit_id: visit_id,
                status: status,
            })
            return response.data
        } catch (e) {
            console.error('Ошибка при получении тренера секций сервера:', e)
            throw e
        }
	}

	async fetchApplications(){
		try{
			const token = await AsyncStorage.getItem('token')
			const response = await axios.post(`${base_url}/applications/section`, {
                token: token,
            })
			return response.data
		}catch(e){
			console.error('Ошибка при получении тренера секций сервера:', e)
           
		}
	}
}
export default new Section()
