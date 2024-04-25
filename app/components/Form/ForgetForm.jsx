import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import User from '../../services/User'
import GreenButton from '../Buttons/GreenButton'
import EmailInput from './UI/EmailInput'

export default function ForgetForm({ navigation, email}) {
	const [FormData, setFormData] = useState({
		email: email,
	})
	emailChangeHandler = email => {
		setFormData({ ...FormData, email: email })
	}
	const resetHandler = async () =>{
		const response = await User.resetPassword(FormData.email);
		try{
			console.log(response)
			if(response.status === 'success'){
                navigation.goBack()
				Alert.alert('Успешно', 'Ваш пароль успешно обновлен и отправлен на вашу почту')
            }
        }catch(e){
			console.error(e)
		}
	}
	return (
		<View className='bg-white p-5 rounded-xl' style={styles.container}>
			<Text className='font-semibold text-2xl text-center'>Восстановления пароля</Text>
			<View style={styles.formContainer}>
				<EmailInput Email={FormData.email} onChangeEmail={emailChangeHandler} />
				<GreenButton text={'Восстановить'} onPress={resetHandler}/>
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
