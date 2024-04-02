import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import HeaderGoBack from '../../components/Header/HeaderGoBack'

export default function STrainerProfile({ navigation, route }) {
	const { name } = route.params
	return (
		<SafeAreaView>
			<HeaderGoBack pageName={'Профиль тренера'} navigation={navigation} />
			<Text>{name}</Text>
			<View className=''></View>
		</SafeAreaView>
	)
}
