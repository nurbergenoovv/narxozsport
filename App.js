import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import Navigator from './Navigator'
import { AuthContext } from './app/Hooks/authContext'
import SSplash from './app/route/Splash/SSplash'

export default function App() {
	const [isSplash, setIsSplash] = useState(true)
	setTimeout(() => {
		setIsSplash(false)
	}, 2000)
	const [isAuth, setIsAuth] = useState(false)

	const checkAuthentication = async () => {
		try {
			const token = await AsyncStorage.getItem('token')
			console.log(token)
			if (token != null) {
				setIsAuth(true)
			} else {
				setIsAuth(false)
			}
		} catch (error) {
			setIsAuth(false)
		}
	}
	useEffect(() => {
		const initializeApp = async () => {
			await checkAuthentication()
		}

		initializeApp()
	}, [])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<>{isSplash ? <SSplash /> : <Navigator isAuth={isAuth}/>}</>
		</AuthContext.Provider>
	)
}
