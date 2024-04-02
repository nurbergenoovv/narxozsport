import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import ListSchedulesCard from '../../components/CardComponents/ListSchedulesCard.jsx'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import data from './data.js'

export default function SListSchedules({ navigation }) {
	return (
		<SafeAreaView className='flex-1 items-center pt-2'>
			<HeaderGoBack pageName={'Список секций'} navigation={navigation} />
			<ScrollView className='w-full mt-2 px-5' style={{ height: '98%' }}>
				<View className='pb-7 pt-4'>
					{data.map((item, index) => (
						<View>
							<TextSmallGray text={item.date} />
							<View key={index} style={{ gap: 10 }} className='mb-4 mt-2'>
								{item.schedules.map((Schedule, index) => (
									<ListSchedulesCard data={Schedule} key={index} navigation={navigation}/>
								))}
							</View>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
