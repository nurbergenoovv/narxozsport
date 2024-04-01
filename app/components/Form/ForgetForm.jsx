import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GreenButton from '../Buttons/GreenButton'
import EmailInput from './UI/EmailInput'

export default function ForgetForm({ navigation, email}) {
	const [FormData, setFormData] = useState({
		email: email,
	})
	emailChangeHandler = email => {
		setFormData({ ...FormData, email: email })
	}
	return (
		<View className='bg-white p-5 rounded-xl' style={styles.container}>
			<Text className='font-semibold text-2xl text-center'>Восстановления пароля</Text>
			<View style={styles.formContainer}>
				<EmailInput Email={FormData.email} onChangeEmail={emailChangeHandler} />
				<GreenButton text={'Восстановить'} onPress={()=>{}}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		gap: 16,
	},
	formContainer: {
		gap: 9,
	},
})
