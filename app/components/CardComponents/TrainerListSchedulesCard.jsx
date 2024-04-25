import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../const/colors'

export default function TrainerListSchedulesCard({ data, navigation }) {
	return (
		<View style={{ position: 'relative', height: 'auto' }}>
			<View className='w-full p-5 bg-white flex-row mb-4 rounded-lg '>
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
						{`${data.start} ${data.end}`}
					</Text>
				</View>
				<View className='pl-3'>
					<Text className='text-lg font-semibold'>
						{data.section_name.name}
					</Text>
					<Text
						className='text-xs text-gray-500'
						style={{ fontWeight: 'medium' }}
					>
						Корпус: {data.place_name}
					</Text>
					
					{/* <Text
						className='text-xs text-gray-500'
						style={{ fontWeight: 'medium' }}
					>
						Места: {`${data.quantity} / ${data.busy} `}
					</Text> */}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})
