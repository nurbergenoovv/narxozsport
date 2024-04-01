import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../../const/colors'

export default function ConfirmPasswordInput({onChangeConfirmPassword, ConfirmPassword}) {
	return (
		<View className='rounded-lg' style={styles.container}>
			<Text className="text-sm">Подтвердите пароль:</Text>
			<TextInput
				editable
                maxLength={50}
                onChangeText={onChangeConfirmPassword}
                value={ConfirmPassword}
                placeholder='Confirm Password'
                style={styles.input}
                secureTextEntry
                returnKeyType='done'
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
	input:{
		fontSize:20,
		height: 30
	}
})
