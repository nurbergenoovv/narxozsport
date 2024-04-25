import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import {
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from 'react-native'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors'
import User from '../../services/User'

export default function SHistoryVisit({ navigation }) {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState([])
	const [error, setError] = useState('')
	const fetchVisit = async () => {
		setIsLoading(true)
		const response = await User.fetchVisits()
		setIsLoading(false)
		if (response.status === 'success') {
			setData(response.visits)
		} else if (response.status === 'error') {
			setError(response.message)
		}
	}

	useFocusEffect(
		useCallback(() => {
			fetchVisit()
		}, [navigation])
	)

	return (
		<SafeAreaView>
			<HeaderGoBack navigation={navigation} pageName={'История посещения'} />
			<ScrollView className='p-5 mt-2'>
				{isLoading && (
					<ActivityIndicator
						size='large'
						color={colors.primary}
						style={{ position: 'absolute', zIndex: 1, top: '55%' }}
					/>
				)}
				{error && <Text>{error}</Text>}
				<View style={{ gap: 10 }} className="mb-10">
					{data.length > 0 ? (
						data.map((visit, index) => (
							<View
								key={index}
								style={{ gap: 5, backgroundColor: colors.opacityWhiteV2 }}
								className='w-full py-3 rounded-lg px-3'
							>
								<Text className='font-semibold text-lg left-0 top-0'>
									{visit.section_information.name}
								</Text>
								<TextSmallGray text={visit.date} />
								<TextSmallGray text={`Трейнер: ${visit.trainer_information.last_name} ${visit.trainer_information.first_name}`} />
								<TextSmallGray
									text={`Статус: ${visit.visit ? 'Было' : 'Не было'}`}
								/>
							</View>
						))
					) : (
						<>
							<TextSmallGray text={'Не найдено заявок на бронь'} />
						</>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
