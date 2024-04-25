import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../const/colors'

export default function GreenButton({ text, onPress, isLoading = false }) {
	return (
		<TouchableOpacity
			className='justify-center items-center py-3 rounded-lg'
			style={[
				styles.container,
				{ backgroundColor: isLoading ? colors.opacityWhiteV2 : colors.success },
			]}
			onPress={onPress}
		>
			<Text className='text-xl font-semibold' 
				style={{color: isLoading ? colors.black : 'white'}}
			>
				{isLoading ? 'Загрузка ...' : text}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
})
