import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import AcademyElement from '../../components/Buttons/AcademyElement'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import data from './data'

export default function SAcademyCalendar({ navigation }) {
	return (
		<SafeAreaView
			className='flex-1 items-center pt-2'
			showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
		>
			<HeaderGoBack
				pageName={'Академический календарь'}
				navigation={navigation}
			/>
			<View className='px-5 pt-5 mb-5'>
				<AcademyElement sections={data} />
			</View>
		</SafeAreaView>
	)
}
