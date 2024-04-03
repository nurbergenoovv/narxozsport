import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import DropDown2 from '../../components/Buttons/DropDown2'
import ListSchedulesCard from '../../components/CardComponents/ListSchedulesCard.jsx'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import data from './data.js'

export default function SListSchedules({ navigation }) {
	const [sTrainer, setSTrainer] = useState(undefined)
	const trainers = [
		{ label: 'Не выбрано', value: '' },
		{ label: 'Мадина Сактаганова', value: '1' },
		{ label: 'Айгуль Мендекеева', value: '2' },
		{ label: 'Амра Шалбарбаев', value: '3' },
		{ label: 'Аскар Маралбаев', value: '4' },
		{ label: 'Бакытжан Ногаев', value: '5' },
		{ label: 'Данияр Джакабаев', value: '6' },
		{ label: 'Ербол Накипов', value: '7' },
		{ label: 'Ерлан Ахбаев', value: '8' },
		{ label: 'Жаксыгуль Садыкова', value: '9' },
		{ label: 'Кайрат Мукашев', value: '9' },
	]
	return (
		<SafeAreaView className='flex-1 items-center pt-2'>
			<HeaderGoBack pageName={'Список секций'} navigation={navigation} />
			<ScrollView className='w-full mt-2 px-5' style={{ height: '98%' }}>
				<View className='mt-2' style={{gap:10}}>
					<View>
						<TextSmallGray text={'Тренеры'} />
						<DropDown2
							label='Не выбрано'
							data={trainers}
							onSelect={setSTrainer}
						/>
					</View>
					<View>
						<TextSmallGray text={'Секция'} />
						<DropDown2
							label='Не выбрано'
							data={trainers}
							onSelect={setSTrainer}
						/>
					</View>
					<View>
						<TextSmallGray text={'Время'} />
						<DropDown2
							label='Не выбрано'
							data={trainers}
							onSelect={setSTrainer}
						/>
					</View>
				</View>
				<View className='pb-7 pt-4'>
					{data.map((item, index) => (
						<View key={index}>
							<TextSmallGray text={item.date} />
							<View key={index} style={{ gap: 10 }} className='mb-4 mt-2'>
								{item.schedules.map((Schedule, index2) => (
									<ListSchedulesCard
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
