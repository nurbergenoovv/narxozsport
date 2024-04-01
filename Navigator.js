import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import { AuthContext, useAuth } from './app/Hooks/useAuth'
import SAcademyCalendar from './app/route/AcademyCalendar/SAcademyCalendar'
import SForgetPassword from './app/route/Auth/ForgetPassword/SForgetPassword'
import SSignIn from './app/route/Auth/SignIn/SSignIn'
import SSignUp from './app/route/Auth/SignUp/SSignUp'
import SListSchedules from './app/route/ListSchedules/SListSchedules'
import SNotifications from './app/route/Notifications/SNotifications'
import SSchedules from './app/route/Schedules/SSchedules'
import SSetting from './app/route/Setting/SSetting'
import TabNavigator from './TabNavigator'
const Stack = createNativeStackNavigator()

export default function Navigator() {
	const { isAuth, setIsAuth } = useAuth()
	return (
		<>
			<StatusBar style='auto' />
			<AuthContext.Provider value={{ isAuth, setIsAuth }}>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						{!isAuth !== null ? (
							isAuth ? (
								<>
									<Stack.Screen name='Tab' component={TabNavigator} />
									<Stack.Screen name='Setting' component={SSetting} />
									<Stack.Screen name='Notifications' component={SNotifications} />
									<Stack.Screen name='AcademyCalendar' component={SAcademyCalendar} />
									<Stack.Screen name='Schedules' component={SSchedules} />
									<Stack.Screen name='ListSchedules' component={SListSchedules} />
									
								</>
							) : (
								<>
									<Stack.Screen name='SignIn' component={SSignIn} />
									<Stack.Screen name='SignUp' component={SSignUp} />
									<Stack.Screen
										name='ForgetPassword'
										component={SForgetPassword}
									/>
								</>
							)
						) : null}
					</Stack.Navigator>
				</NavigationContainer>
			</AuthContext.Provider>
		</>
	)
}
