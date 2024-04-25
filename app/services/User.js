// User.js
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Alert } from 'react-native'
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
	async validate() {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/user/valid`, {
				token: token,
			})
			// console.log(response.data)
			return response.data.status == 'success'
		} catch (error) {
			console.error('Ошибка валидации:', error)
			return false
		}
	}

	async check_token() {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/user/valid`, {
				token: token,
			})
			return response.data.status == 'success'
		} catch (error) {
			console.error('Ошибка валидации:', error)
			setIsAuth(false)
			Alert.alert(
				'Авторизация',
				'В ваш аккаунт был выполнен вход с другого устройства пожалуйста попробуйте еще раз'
			)
			AsyncStorage.removeItem('token')
			return false
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

	async uploadPhoto(formData) {
		try {
			const response = await axios.post(
				`https://clickme.kz/upload.php`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			return response.data
		} catch (error) {
			console.error('Error uploading file:', error)
		}
	}

	async uploadMedicalCertificate(formData) {
		try {
			const response = await axios.post(
				`https://clickme.kz/uploadFile.php`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			return response.data
		} catch (error) {
			console.error('Error uploading file:', error)
		}
	}

	async verification(email) {
		try {
			const response = await axios.post(`${base_url}/user/verification/code`, {
				email: email,
			})
			return response.data
		} catch (error) {
			console.error('Error send verification code:', error)
		}
	}

	async verification_done(email) {
		try {
			const response = await axios.post(
				`${base_url}/user/verification/verify`,
				{
					email: email,
				}
			)
			return response.data
		} catch (error) {
			console.error('Error verification done:', error)
		}
	}

	async updatePassword(formData) {
		const token = await AsyncStorage.getItem('token')
		console.log(`${base_url}/user/update/password`)
		try {
			const response = await axios.post(`${base_url}/user/update/password`, {
				token: token,
				...formData,
			})
			return response.data
		} catch (error) {
			console.error('Error update password:', error.response.data)
		}
	}

	async resetPassword(email) {
		try {
			const response = await axios.post(`${base_url}/user/resetpassword`, {
				email: email,
			})
			return response.data
		} catch (error) {
			console.error('Error reset password:', error)
		}
	}

	async addUserMedicalCertificate(url) {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/user/medical/add`, {
				token: token,
				url: url,
			})
			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async getUserMedicalCertificate() {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/user/medical/get`, {
				token: token,
			})
			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async deleteUserMedicalCertificate() {
		const token = await AsyncStorage.getItem('token')
		try {
			const response = await axios.post(`${base_url}/user/medical/delete`, {
				token: token,
			})
			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async clearNotifications() {
		const user_id = await AsyncStorage.getItem('id')
		console.log(`${base_url}/notifications/${user_id}/clear`)
		try {
			const response = await axios.post(
				`${base_url}/notifications/${user_id}/clear`
			)
			return response.data
		} catch (e) {
			console.error(e)
		}
	}

	async getInformationById(student_id) {
		const token = await AsyncStorage.getItem('token')
		try{
			const response = await axios.post(`${base_url}/student/information/get`, {
				token: token,
                student_id: student_id,
			})
			return response.data
		}catch(e){
			console.error(e)
		}
	}

	async setApplication(status, student_id){
		const token = await AsyncStorage.getItem('token')
        try{
            const response = await axios.post(`${base_url}/applications/section/status/change`, {
                token: token,
                status: status,
                student_id: student_id,
            })
            return response.data
        }catch(e){
            console.error(e)
        }
	}

	async fetchVisits(){
		const token = await AsyncStorage.getItem('token')
        try{
            const response = await axios.post(`${base_url}/user/visits/get`, {
                token: token,
            })
            return response.data
        }catch(e){
            console.error(e)
        }
	}

}

export default new User()
