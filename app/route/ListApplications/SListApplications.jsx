import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import {
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	RefreshControl
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import UserAvatar from '../../components/CardComponents/UserAvatar'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors'
import Sections from '../../services/Sections'

export default function SListApplications({ navigation }) {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState([])
	const [isRefreshing, setIsRefreshing] = useState(false); // State for refreshing

	const fetchApplications = async () => {
		try {
			setIsLoading(true)
			const response = await Sections.fetchApplications()
			setIsLoading(false)
			if (response.status == 'success') {
				setData(response.application)
			}
		} catch (e) {}
	}

	const onRefresh = () => {
		setIsRefreshing(true); // Set refreshing state to true
		fetchApplications(); // Fetch user information
		setIsRefreshing(false); // Set refreshing state back to false when done
	};
	useFocusEffect(
		useCallback(() => {
			fetchApplications()
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
			<HeaderGoBack pageName={'Заявки на бронь'} navigation={navigation} />
			<ScrollView className='w-full mt-2 px-5' style={{ height: '98%' }} refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
				}>
				<View className='pb-7 pt-4'>
					<View className='bg-white p-3 rounded-md'>
						<TextSmallGray text={'Список заявок'} />
						{data.length > 0 ? (
							<View className='mt-[8px]' style={{ gap: 5 }}>
								{data.map((application, index) => (
									<TouchableOpacity
										key={index}
										className='w-full p-2.5 items-center flex-row rounded-md'
										style={{ backgroundColor: colors.opacityWhiteV1, gap: 13 }}
										onPress={() => {
											navigation.push('AboutStudent', { data: application })
										}}
									>
										<UserAvatar
											width={52}
											height={52}
											borderWidth={2.5}
											link={application.profile_photo}
											padding={2}
										/>
										<View style={{ gap: -5 }}>
											<Text className='text-base font-semibold'>
												{application.last_name} {application.first_name}
											</Text>
											<TextSmallGray text={application.email} />
											<TextSmallGray
												text={`Кол-во посещений: ${application.visits}`}
											/>
										</View>
										<MaterialCommunityIcons
											name={'chevron-right'}
											size={24}
											color={colors.primary}
											style={{ position: 'absolute', right: 10 }}
										/>
									</TouchableOpacity>
								))}
							</View>
						) : (
							<>
								<TextSmallGray text={'Не найдено заявок на бронь'} />
							</>
						)}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
