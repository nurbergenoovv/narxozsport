import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../const/colors'

export default function ListSchedulesCard({ data, navigation }) {
	return (
		<View style={{ position: 'relative', height: 'auto', paddingBottom: 35 }}>
			<View className='w-full p-5 bg-white flex-row mb-4 rounded-t-lg '>
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
					<Text className='text-center font-semibold text-sm'>
						{data.time}
					</Text>
				</View>
				<View className='pl-3'>
					<Text className='text-lg font-semibold'>{data.name}</Text>
					<Text
						className='text-xs text-gray-500'
						style={{ fontWeight: 'medium' }}
					>
						Корпус: {data.corpus}
					</Text>
					<Text
						className='text-xs text-gray-500'
						style={{ fontWeight: 'medium' }}
					>
						Место: {data.place}
					</Text>
					<Text
						className='text-xs text-gray-500'
						style={{ fontWeight: 'medium' }}
					>
						Тренер: {data.trainer}
					</Text>
				</View>
			</View>
			<TouchableOpacity
			onPress={()=>{
				console.log(data.id)
				navigation.push('AboutSection', {data: data})
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
