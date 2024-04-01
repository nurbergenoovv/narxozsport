import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../const/colors'

export default function NotificationCount({count}) {
	return (
		<View
			style={{
				backgroundColor: colors.primary,
				borderRadius: 50,
				position: 'absolute',
				top: -5,
				right: -5,
				zIndex: 1,
			}}
			className='justify-center items-center'
		>
			<Text
				className='text-white text-center justify-center items-center'
				style={{ fontSize: 12, padding: 2, paddingHorizontal: 8, height: 20 }}
			>
				{count}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
