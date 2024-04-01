import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import colors from '../../../const/colors'

export default function PhoneNumberInput({phoneNumber, onChangePhoneNumber}) {
	return (
		<View className='rounded-lg' style={styles.container}>
			<Text className="text-sm">Номер телефона:</Text>
			<TextInputMask
                style={styles.input}
                type={'custom'}
                options={{
                    mask: '+7 (999) 999 99 99',
                }}
                placeholder="+7 (___) ___ __ __"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={onChangePhoneNumber}
                returnKeyType="done"
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
