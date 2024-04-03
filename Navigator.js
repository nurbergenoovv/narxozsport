import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import SAboutSection from './app/route/AboutSection/SAboutSection'
import SAcademyCalendar from './app/route/AcademyCalendar/SAcademyCalendar'
import SForgetPassword from './app/route/Auth/ForgetPassword/SForgetPassword'
import SSignIn from './app/route/Auth/SignIn/SSignIn'
import SSignUp from './app/route/Auth/SignUp/SSignUp'
import SListSchedules from './app/route/ListSchedules/SListSchedules'
import SNotifications from './app/route/Notifications/SNotifications'
import SVerification from './app/route/OTP/SVerification'
import SSchedules from './app/route/Schedules/SSchedules'
import SSetting from './app/route/Setting/SSetting'
import STrainerProfile from './app/route/TrainerProfile/STrainerProfile'
import SUserEdit from './app/route/UserEdit/SUserEdit'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

export default function Navigator({isAuth}) {

	return (
		<>
			<StatusBar style='auto' />
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						{isAuth ? (
							<>
								<Stack.Screen name='Tab' component={TabNavigator} />
								<Stack.Screen name='Setting' component={SSetting} />
								<Stack.Screen name='Notifications' component={SNotifications} />
								<Stack.Screen
									name='AcademyCalendar'
									component={SAcademyCalendar}
								/>
								<Stack.Screen name='Schedules' component={SSchedules} />
								<Stack.Screen name='ListSchedules' component={SListSchedules} />
								<Stack.Screen name='AboutSection' component={SAboutSection} />
								<Stack.Screen
									name='TrainerProfile'
									component={STrainerProfile}
								/>
								<Stack.Screen name='UserEdit' component={SUserEdit} />
								<Stack.Screen name='Verification' component={SVerification} />
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
						)}
					</Stack.Navigator>
				</NavigationContainer>
		</>
	)
}
