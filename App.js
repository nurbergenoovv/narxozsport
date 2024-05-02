import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import Navigator from './Navigator'
import { AuthContext } from './app/Hooks/authContext'
import SSplash from './app/route/Splash/SSplash'
import Server from './app/services/Server'
import User from './app/services/User'

export default function App() {
	const getNotificationPermissions = async () => {
		try {
			const { status } = await Notifications.requestPermissionsAsync()
			if (status !== 'granted') {
				alert(
					'You need to enable permissions in order to receive notifications'
				)
				return false
			}
			return true
		} catch (error) {
			console.error('Error getting notification permissions:', error)
			return false
		}
	}

	const testtt = async () => {
		try {
			const { status } = await Notifications.requestPermissionsAsync()
			if (status !== 'granted') {
				alert(
					'You need to enable permissions in order to receive notifications'
				)
				return
			}
			const { data: token } = await Notifications.getExpoPushTokenAsync()
			console.log(token)
		} catch (error) {
			console.error('Error getting notification permissions:', error)
		}
	}

	const [isSplash, setIsSplash] = useState(true)
	const [isAuth, setIsAuth] = useState(false)

	const checkAuthentication = async () => {
		testtt()
		try {
			const token = await AsyncStorage.getItem('id')
			console.log(token)
			if (token !== null) {
				const validate = await User.validate()
				if (validate) {
					setIsAuth(true)
					setIsSplash(false)
				} else {
					setIsAuth(false)
					setIsSplash(false)
					Alert.alert(
						'Авторизация',
						'В ваш аккаунт был выполнен вход с другого устройства, пожалуйста, попробуйте еще раз'
					)
					await AsyncStorage.removeItem('token')
					await AsyncStorage.removeItem('id')
				}
			} else {
				setIsAuth(false)
				setIsSplash(false)
			}
		} catch (error) {
			setIsAuth(false)
			setIsSplash(false)
		}
	}

	useEffect(() => {
		const gett = async () => {
			const permissionsGranted = await getNotificationPermissions()
			if (!permissionsGranted) return
		}
		gett()
		async function test() {
			await Notifications.sendPushNotificationAsync({
				to: userPushNotificationToken,
				title: 'New message',
				body: 'You have a new message',
			})
		}
		const initializeApp = async () => {
			const connection = await Server.check_connection()
			if (connection) {
				console.log('Server is connected')
				await checkAuthentication()
			}
		}
		initializeApp()
	}, [])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<>{isSplash ? <SSplash /> : <Navigator isAuth={isAuth} />}</>
		</AuthContext.Provider>
	)
}
