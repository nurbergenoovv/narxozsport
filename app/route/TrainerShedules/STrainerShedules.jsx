import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, View } from 'react-native'
import TrainerListSchedulesCard from '../../components/CardComponents/TrainerListSchedulesCard.jsx'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors.js'
import Sections from '../../services/Sections.js'

export default function STrainerSchedules({ navigation }) {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState([])

	const fetchSections = async () => {
		try {
			setIsLoading(true)
			const response = await Sections.getTrainerSections()
			if (response.status == 'success') {
				setData(response.schedules)
			}
			setIsLoading(false)
		} catch (e) {
			console.error(e)
		}
	}

	useFocusEffect(
		useCallback(() => {
			fetchSections()
		}, [navigation])
	)

	return (
		<SafeAreaView className='flex-1 items-center pt-2'>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', zIndex: 1, top: '55%' }}
				/>
			)}
			<HeaderGoBack pageName={'Список секций'} navigation={navigation} />
			<ScrollView className='w-full mt-2 px-5' style={{ height: '98%' }}>
				<View className='pb-7 pt-4'>
					{data.map(section => (
						<View key={section.day}>
							<TextSmallGray text={section.day} />
							<View style={{ gap: 5 }} className='mb-4 mt-2'>
								{section.schedules.map((Schedule, index2) => (
									<TrainerListSchedulesCard
										data={Schedule}
										key={index2}
										navigation={navigation}
									/>
								))}
							</View>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
