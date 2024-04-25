import React, { useEffect, useState } from 'react'
import {
	ActivityIndicator,
	Alert,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RedButton from '../../components/Buttons/RedButton'
import ReviewCard from '../../components/CardComponents/ReviewCard'
import UserAvatar from '../../components/CardComponents/UserAvatar'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import LabelAndText from '../../components/TextPlace/LabelAndText'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors'
import Sections from '../../services/Sections'

export default function SAboutSection({ navigation, route }) {
	const [isLoading, setIsLoading] = useState(false)
	const { data } = route.params
	const [subscribed, setSubscribed] = useState(data.subscribed)
	const [application, setApplication] = useState(false)

	useEffect(() => {
		console.log(data)
	}, [])

	const sendApplication = async () => {
		Alert.alert('Отправка заявки', 'Пожалуйста, подтвердите ваше действие', [
			{
				text: 'Назад',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'Подтверждаю',
				onPress: async () => {
					try {
						setIsLoading(true)
						const response = await Sections.subscribeToSection(data.section_id)
						setIsLoading(false)
						console.log(response)
						if (response.status === 'success') {
							Alert.alert(
								'Успешно',
								'Вы успешно отправили заявку на бронь, ждите ответа тренера'
							)
							setApplication(true)
						} else {
							Alert.alert('Ошибка', response.message)
						}gi
					} catch (e) {}
				},
			},
		])
	}

	const subscribeSection = async () => {
		Alert.alert('Бронирование', 'Пожалуйста, подтвердите ваше бронирование', [
			{
				text: 'Назад',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'Подтверждаю',
				onPress: async () => {
					try {
						setIsLoading(true)
						const response = await Sections.subscribeToSection(data.section_id)
						setIsLoading(false)
						console.log(response)
						if (response.status === 'success') {
							Alert.alert('Успешно', 'Вы успешно бронировали место')
							setSubscribed(true)
						} else {
							Alert.alert('Ошибка', response.message)
						}
					} catch (e) {}
				},
			},
		])
	}

	const unSubscribeSection = async () => {
		Alert.alert(
			'Отмена бронирования',
			'Пожалуйста, подтвердите ваше отмену бронирования',
			[
				{
					text: 'Назад',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{
					text: 'Подтверждаю',
					onPress: async () => {
						try {
							setIsLoading(true)
							const response = await Sections.unsubscribeSection(
								data.section_id
							)
							setIsLoading(false)
							console.log(response)
							if (response.status === 'success') {
								Alert.alert('Успешно', 'Бронирование отменено')
								setSubscribed(false)
							} else {
								Alert.alert('Ошибка', response.message)
							}
						} catch (e) {}
					},
				},
			]
		)
	}

	return (
		<SafeAreaView className=''>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', zIndex: 1, top: '60%', width: '100%' }}
				/>
			)}
			<HeaderGoBack
				pageName={'Подробная информация о секции'}
				navigation={navigation}
			/>
			<ScrollView>
				<View
					className='p-5 '
					style={{ width: '100%', height: '98%', gap: 13 }}
				>
					<Text className='text-2xl font-semibold mb-3'>
						{data.section_info.name}
					</Text>
					<LabelAndText
						text={`Свободных мест: ${data.quantity - data.busy}`}
						label={'Места'}
						gap={8}
					/>
					<LabelAndText
						text={data.section_info.description}
						label={'Описание'}
						gap={8}
					/>
					<TextSmallGray text={'Расписание'} />
					{data.training_days_and_times.map((training_day, index) => (
						<View className='flex-row justify-between' key={index}>
							<Text className='font-medium text-lg'>{training_day.day}</Text>
							<Text className='font-medium text-lg'>{`${training_day.start} - ${training_day.end}`}</Text>
						</View>
					))}

					<TextSmallGray text={'Информация о тренере'} />
					<TouchableOpacity
						className='flex-row gap-1 p-[10px] rounded-xl items-center justify-between'
						style={{ backgroundColor: colors.trainerBGColor }}
						onPress={() => {
							navigation.push('TrainerProfile', { data: data.trainer_info })
						}}
					>
						<View className='flex-row items-center' style={{ gap: 10 }}>
							<UserAvatar
								link={data.trainer_info.profile_photo}
								height={48}
								width={48}
								borderWidth={2}
								padding={1}
							/>
							<View>
								<Text className='font-semibold text-base'>{`${data.trainer_info.last_name} ${data.trainer_info.first_name}`}</Text>
								<Text style={{ color: colors.primary }}>
									{data.trainer_info.position}
								</Text>
							</View>
						</View>
						<MaterialCommunityIcons
							name={'chevron-right'}
							size={24}
							color={colors.primary}
						/>
					</TouchableOpacity>

					{data.section_info.type_section === 0 ? (
						<RedButton
							text={subscribed ? 'Отменить бронь' : 'Забронировать'}
							onPress={subscribed ? unSubscribeSection : subscribeSection}
						/>
					) : (
						<RedButton
							text={subscribed ? 'Отменить бронь' :application ?  'Отправить заявку на бронь' : 'Отправить заявку на бронь'}
							onPress={subscribed ? unSubscribeSection : sendApplication}
						/>
					)}

					<TextSmallGray text={'Отзывы о занятии'} className={'mt-2'} />
					<View
						role='reviews'
						className={'flex-col gap-2 bg-white p-2 rounded-lg'}
						style={{ gap: 10 }}
					>
						<ReviewCard
							name={'Имя пользователя'}
							reviewText={'Текст отзыв о секцийтекст отзыв о секций'}
						/>
						
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
