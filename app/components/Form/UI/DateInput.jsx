import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import colors from '../../../const/colors'

export default function DateInput({onChangeDate, date}) {
	return (
		<View className='rounded-lg' style={styles.container}>
			<Text className="text-sm">Дата рождения:</Text>
			<TextInputMask
                style={styles.input}
                type={'datetime'}
                options={{
                    format: 'MM-DD-YYYY',
                }}
                placeholder="MM-DD-YYYY"
                value={date}
                onChangeText={onChangeDate}
                keyboardType="numeric"
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
