import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../const/colors'

export default function ScheduleCard({ data }) {
	return (
		<View className='w-full p-5 bg-white flex-row rounded-lg mb-4'>
			<View
				className=''
				style={{
					width: '20%',
					borderRightColor: colors.black,
					borderRightWidth: 1,
					maxWidth: '20%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Text className='text-center font-semibold text-sm'>{data.schedule.time}</Text>
			</View>
			<View className='pl-3'>
				<Text className='text-lg font-semibold'>{data.schedule.name}</Text>
				<Text
					className='text-xs text-gray-500'
					style={{ fontWeight: 'medium' }}
				>
					Корпус: {data.schedule.corpus}
				</Text>
				<Text
					className='text-xs text-gray-500'
					style={{ fontWeight: 'medium' }}
				>
					Место: {data.schedule.place}
				</Text>
				<Text
					className='text-xs text-gray-500'
					style={{ fontWeight: 'medium' }}
				>
					Тренер: {data.schedule.trainer}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})
