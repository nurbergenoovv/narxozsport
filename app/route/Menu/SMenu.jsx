import React from 'react'
import { SafeAreaView, View } from 'react-native'
import MenuButton from '../../components/Buttons/MenuButton'
import HeaderMenuScreen from '../../components/Header/HeaderMenuScreen'
import styles from './MenuStyle'

export default function SMenu({ navigation }) {
	return (
		<SafeAreaView className='flex-1 items-center'>
			<View>
				<HeaderMenuScreen />
				<View style={styles.container}>
					<View
						style={styles.WhiteContainer}
						className='bg-white d-flex flex-row justify-between'
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
				</View>
			</View>
		</SafeAreaView>
	)
}
