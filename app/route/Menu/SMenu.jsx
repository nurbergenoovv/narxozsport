import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'
import MenuButton from '../../components/Buttons/MenuButton'
import HeaderMenuScreen from '../../components/Header/HeaderMenuScreen'
import colors from '../../const/colors'
import User from '../../services/User'
import styles from './MenuStyle'

export default function SMenu({ navigation }) {
	const [data, setData] = useState({})
	const [isLoading, setIsLoading] = useState(false)

	const getInformation = async () => {
		setIsLoading(true)
		const response = await User.information()
		setIsLoading(false)

		if (response.status === 'success') {
			setData(response.user_info)
		}
	}

	useEffect(() => {
		getInformation()
	}, [])
	
	return (
		<SafeAreaView className='flex-1 items-center'>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 1 }}
				/>
			)}
			<View className="px-3">
				<HeaderMenuScreen />
				<View style={styles.container}>
					{data.role == 'Student' ? (
						<View
							style={styles.WhiteContainer}
							className='bg-white d-flex flex-row justify-around min-w-full items-start'
						>
							<MenuButton
								text={'Академический календарь'}
								icon={'calendar-month-outline'}
								onPress={() => {
									navigation.push('AcademyCalendar')
								}}
							/>
							<MenuButton
								text={'Расписание'}
								icon={'calendar-check-outline'}
								onPress={() => {
									navigation.push('Schedules')
								}}
							/>
							<MenuButton
								text={'Список секций'}
								icon={'format-list-bulleted'}
								onPress={() => {
									navigation.push('ListSchedules')
								}}
							/>
						</View>
					) : (
						<View
							style={styles.WhiteContainer}
							className='bg-white d-flex flex-row justify-evenly min-w-full items-start w-full'
						>
							<MenuButton
								text={'Мое\nрасписания'}
								icon={'format-list-bulleted'}
								onPress={() => {
									navigation.push('TrainerSchedules')
								}}
							/>
							<MenuButton
								text={'Журнал'}
								icon={'order-bool-ascending-variant'}
								onPress={() => {
									navigation.push('StudentVisitCheck')
								}}
							/>
							{data.type_section === 1 && (
								<MenuButton
									text={'Заявки\nна бронь'}
									icon={'script-text-outline'}
									onPress={() => {
										navigation.push('ListApplications')
									}}
								/>
							)}
						</View>
					)}
				</View>
			</View>
		</SafeAreaView>
	)
}
