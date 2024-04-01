import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import ScheduleCard from '../../components/CardComponents/ScheduleCard'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import data from './data'

export default function SSchedules({ navigation }) {
	return (
		<SafeAreaView>
			<HeaderGoBack
				pageName={'Расписания спортивной секций'}
				navigation={navigation}
			/>
			<ScrollView className='w-full p-5' style={{height:"98%"}}>
				{data.map((item, index) => (
					<View key={index} style={{gap:5}}>
						<TextSmallGray text={item.date} />
						<ScheduleCard data={item}/>
					</View>
				))}
			</ScrollView>
		</SafeAreaView>
	)
}
