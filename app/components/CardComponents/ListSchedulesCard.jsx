import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../const/colors'

export default function ListSchedulesCard({ data, navigation }) {
	return (
		<View style={{ position: 'relative', height: 'auto', paddingBottom: 35 }}>
			<View className='w-full p-5 bg-white flex-row mb-4 rounded-t-lg '>
				<View className='pl-1'>
					<Text className='font-semibold text-sm'>
						{`${data.start_time} - ${data.end_time}`}
					</Text>
					<Text className='text-lg font-semibold'>
						{data.section_info.name}
					</Text>
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
						Тренер:{' '}
						{`${data.trainer_info.last_name} ${data.trainer_info.first_name} `}
					</Text>
					<Text
						className='text-xs text-gray-500'
						style={{ fontWeight: 'medium' }}
					>
						Места: {`${data.quantity} / ${data.busy} `}
					</Text>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => {
					console.log(data.id)
					navigation.push('AboutSection', {
						data: data,
					})
				}}
				style={{
					bottom: 0,
					width: '100%',
					backgroundColor: colors.primary,
					position: 'absolute',
				}}
				className='text-center items-center justify-center rounded-b-lg'
			>
				<Text className='py-4 text-center text-white text-sm font-semibold'>
					Подробнее
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({})
