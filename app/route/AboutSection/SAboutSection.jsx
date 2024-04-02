import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RedButton from '../../components/Buttons/RedButton'
import ReviewCard from '../../components/CardComponents/ReviewCard'
import UserAvatar from '../../components/CardComponents/UserAvatar'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import LabelAndText from '../../components/TextPlace/LabelAndText'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors'

export default function SAboutSection({ navigation, route }) {
	const { data } = route.params
	return (
		<SafeAreaView className=''>
			<HeaderGoBack
				pageName={'Подробная информация о секции'}
				navigation={navigation}
			/>
			<ScrollView>
				<View
					className='p-5 '
					style={{ width: '100%', height: '98%', gap: 13 }}
				>
					<Text className='text-2xl font-semibold mb-3'>{data.name}</Text>
					<LabelAndText text={'Свободных мест: 25'} label={'Места'} gap={8} />
					<LabelAndText
						text={
							'В тренажерном зале Вы можете тренироваться как самостоятельно, так и персонально с инструктором. Персональная тренировка –  это индивидуальный подход, безопасные тренировки и скорейшее достижение своих целей.'
						}
						label={'Описание'}
						gap={8}
					/>
					<TextSmallGray text={'Расписание'} />
					<View className='flex-row justify-between'>
						<Text className='font-medium text-lg'>{data.date}</Text>
						<Text className='font-medium text-lg'>{data.time}</Text>
					</View>
					<View className='flex-row justify-between'>
						<Text className='font-medium text-lg'>{data.date}</Text>
						<Text className='font-medium text-lg'>{data.time}</Text>
					</View>
					<TextSmallGray text={'Информация о тренере'} />
					<TouchableOpacity
						className='flex-row gap-1 p-[10px] rounded-xl items-center justify-between'
						style={{ backgroundColor: colors.trainerBGColor }}
						onPress={() => {
							navigation.push('TrainerProfile', { name: data.trainer })
						}}
					>
						<View className='flex-row items-center' style={{ gap: 10 }}>
							<UserAvatar
								link={'https://clickme.kz/photo.png'}
								height={48}
								width={48}
								borderWidth={2}
								padding={1}
							/>
							<View>
								<Text className='font-semibold text-base'>{data.trainer}</Text>
								<Text style={{ color: colors.primary }}>
									Инструктор тренажерного зала
								</Text>
							</View>
						</View>
						<MaterialCommunityIcons
							name={'chevron-right'}
							size={24}
							color={colors.primary}
						/>
					</TouchableOpacity>
					<RedButton text={'Забронировать'} onPress={() => console.log(123)} />

					<TextSmallGray text={'Отзывы о занятии'} className={'mt-2'} />
					<View
						role='reviews'
						className={'flex-col gap-2 bg-white p-2 rounded-lg'}
						style={{ gap: 10 }}
					>
						<ReviewCard
							name={'Nurbergen Ibrakhim'}
							reviewText={'Lorem ipsum dolor sit amet consectetur'}
						/>
						<ReviewCard
							name={'Nurbergen Ibrakhim'}
							reviewText={'Lorem ipsum dolor sit amet consectetur'}
						/>
						<ReviewCard
							name={'Nurbergen Ibrakhim'}
							reviewText={'Lorem ipsum dolor sit amet consectetur'}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
