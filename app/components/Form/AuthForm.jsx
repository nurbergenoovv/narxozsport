import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GreenButton from '../Buttons/GreenButton'
import BlueLinkText from '../Link/BlueLinkText'
import EmailInput from './UI/EmailInput'
import PasswordInput from './UI/PasswordInput'

export default function AuthForm({ navigation }) {
	const [FormData, setFormData] = useState({
		email: '',
		password: '',
	})
	emailChangeHandler = email => {
		setFormData({ ...FormData, email: email })
	}
	passwordChangeHandler = password => {
		setFormData({ ...FormData, password: password })
	}
	const SignUpLinkHandler = () => {
		navigation.push('SignUp')
	}
	const ForgetPasswordLinkHandler = () => {
		navigation.push('ForgetPassword', {email: FormData.email})
	}
	return (
		<View className='bg-white p-5 rounded-xl' style={styles.container}>
			<Text className='font-semibold text-2xl text-center'>Вход</Text>
			<View style={styles.formContainer}>
				<EmailInput Email={FormData.email} onChangeEmail={emailChangeHandler} />
				<PasswordInput
					Password={FormData.password}
					onChangePassword={passwordChangeHandler}
				/>
				<BlueLinkText align={'right'} text={'Забыли пароль?'} onPress={ForgetPasswordLinkHandler}/>
				<GreenButton text={'Войти'} onPress={()=>{}}/>
				<BlueLinkText align={'center'} text={'Нету аккаунтта ? Регистрация'} onPress={SignUpLinkHandler}/>
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
