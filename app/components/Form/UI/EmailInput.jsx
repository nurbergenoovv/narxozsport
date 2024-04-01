import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../../const/colors'

export default function EmailInput({value, onChangeEmail, Email}) {
	return (
		<View className='rounded-lg' style={styles.container}>
			<Text className="text-sm">Email:</Text>
			<TextInput
				editable
				numberOfLines={4}
				maxLength={50}
				onChangeText={text => onChangeEmail(text)}
				value={Email}
				placeholder='example@narxoz.kz'
				style={styles.input}
				enterKeyHint='done'
				inputMode='email'
				keyboardType='email-address'
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
