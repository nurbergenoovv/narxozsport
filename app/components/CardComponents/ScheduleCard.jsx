import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ScheduleCard({ data }) {
	return (
		<View className='w-full p-5 bg-white flex-row rounded-lg mb-4'>
			<View className='pl-1'>
				<Text className='font-semibold text-sm'>{`${data.start_time} ${data.end_time}`}</Text>
				<Text className='text-lg font-semibold'>{data.section_info.name}</Text>
				<Text
					className='text-xs text-gray-500'
					style={{ fontWeight: 'medium' }}
				>
					Корпус: {data.place_info.name}
				</Text>
				<Text
					className='text-xs text-gray-500'
					style={{ fontWeight: 'medium' }}
				>
					{`Тренер: ${data.trainer_info.last_name} ${data.trainer_info.first_name}`}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})
