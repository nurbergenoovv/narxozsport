import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import Navigator from './Navigator'
import { AuthContext } from './app/Hooks/authContext'
import usePushNotifications from './app/Hooks/usePushNotification'
import SSplash from './app/route/Splash/SSplash'
import Server from './app/services/Server'
import User from './app/services/User'

export default function App() {
	const { expoPushToken, notification } = usePushNotifications()

	const [isSplash, setIsSplash] = useState(true)
	const [isAuth, setIsAuth] = useState(false)

	const checkAuthentication = async () => {
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
			<>{isSplash ? <SSplash data={data} expoPushToken={expoPushToken}/> : <Navigator isAuth={isAuth} />}</>
		</AuthContext.Provider>
	)
}
