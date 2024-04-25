import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../../const/colors'

export default function PasswordInput({
	onChangePassword,
	Password,
	text = 'Пароль',
}) {
	return (
		<View className='rounded-lg' style={styles.container}>
			<Text className='text-sm'>{text}:</Text>
			<TextInput
				editable
				numberOfLines={4}
				maxLength={50}
				onChangeText={text => onChangePassword(text)}
				value={Password}
				placeholder='Password'
				style={styles.input}
				enterKeyHint='done'
				inputMode='text'
				secureTextEntry={true}
				keyboardType='default'
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
	input: {
		fontSize: 20,
		height: 30,
	},
})
