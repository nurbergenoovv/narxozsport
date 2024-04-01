import React from 'react'
import { SafeAreaView, View } from 'react-native'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import ListScheduleCard from '../../components/CardComponents/ListSchedulesCard'

export default function SListSchedules({navigation}) {
  return (
	<SafeAreaView className="flex-1 items-center">
		<HeaderGoBack pageName={"Список секций"} navigation={navigation}/>
		<View className="w-full h-full p-5">
		<ListScheduleCard />
		</View>
	</SafeAreaView>
  )
}