import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import SAboutSection from './app/route/AboutSection/SAboutSection'
import SAboutStudent from './app/route/AboutStudent/SAboutStudent'
import SAboutStudentsCheck from './app/route/AboutStudentsCheck/SAboutStudentsCheck'
import SAcademyCalendar from './app/route/AcademyCalendar/SAcademyCalendar'
import SForgetPassword from './app/route/Auth/ForgetPassword/SForgetPassword'
import SSignIn from './app/route/Auth/SignIn/SSignIn'
import SSignUp from './app/route/Auth/SignUp/SSignUp'
import SListApplications from './app/route/ListApplications/SListApplications'
import SListSchedules from './app/route/ListSchedules/SListSchedules'
import SMedicalCertification from './app/route/MedicalCertification/SMedicalCertification'
import SNotifications from './app/route/Notifications/SNotifications'
import SVerification from './app/route/OTP/SVerification'
import SSchedules from './app/route/Schedules/SSchedules'
import SSetting from './app/route/Setting/SSetting'
import SStudentVisitCheck from './app/route/StudentVisitCheck/SStudentVisitCheck'
import STrainerProfile from './app/route/TrainerProfile/STrainerProfile'
import STrainerSchedules from './app/route/TrainerShedules/STrainerShedules'
import SUserEdit from './app/route/UserEdit/SUserEdit'
import SUserPasswordUpdate from './app/route/UserPasswordUpdate/SUserPasswordUpdate'
import TabNavigator from './TabNavigator'
import SHistoryVisit from './app/route/HistoryVisit/SHistoryVisit'

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
								<Stack.Screen name='ChangePassword' component={SUserPasswordUpdate} />
								<Stack.Screen name='MedicalCertificate' component={SMedicalCertification} />
								<Stack.Screen name='TrainerSchedules' component={STrainerSchedules} />
								<Stack.Screen name='StudentVisitCheck' component={SStudentVisitCheck} />
								<Stack.Screen name='AboutStudentsCheck' component={SAboutStudentsCheck} />
								<Stack.Screen name='ListApplications' component={SListApplications} />
								<Stack.Screen name='AboutStudent' component={SAboutStudent} />
								<Stack.Screen name='HistoryVisits' component={SHistoryVisit} />
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
