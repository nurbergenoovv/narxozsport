import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import UserAvatar from '../../components/CardComponents/UserAvatar'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors'

export default function STrainerProfile({ navigation, route }) {
	const { data } = route.params
	return (
		<SafeAreaView>
			<HeaderGoBack pageName={'Профиль тренера'} navigation={navigation} />
			<View className='items-center h-full p-5 mt-7' style={{gap:10}}>
				<UserAvatar link={data.profile_photo} />
				<View className="w-full items-center">
					<Text className='font-semibold text-2xl text-center'>{`${data.last_name} ${data.first_name}`}</Text>
					<TextSmallGray text={data.position} />
				</View>
				<View className='w-full items-center' style={{ gap: 4 }}>
					<Text className='font-semibold text-[16px]' style={{color:colors.opacityGray}}>{'Контактная информация'}</Text>
					<Text className='font-semibold text-[16.5px]'>Почта: {data.email}</Text>
					<Text className='font-semibold text-[16.5px]'>
						Телефон: {data.phone_number}
					</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}
