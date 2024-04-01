import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../../const/colors'

export default function TextInputCustom({text, onChangeText, value, placeholder}) {
	return (
		<View className='rounded-lg' style={styles.container}>
			<Text className="text-sm">{text}:</Text>
			<TextInput
				editable
				numberOfLines={4}
				maxLength={50}
				onChangeText={text => onChangeText(text)}
				value={value}
				placeholder={placeholder}
				style={styles.input}
				enterKeyHint='next'
				inputMode='text'
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.opacityWhiteV1,
		width: '100%',
		padding: 10,
	},
	input:{
		fontSize:20,
		height: 30
	}
})
