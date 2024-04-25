import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { useAuth } from '../../Hooks/useAuth'
import User from '../../services/User'
import GreenButton from '../Buttons/GreenButton'
import PasswordInput from './UI/PasswordInput'

export default function ChangePasswordForm({ navigation }) {
	const { isAuth, setIsAuth } = useAuth()

	const [FormData, setFormData] = useState({
		current_password: '',
		new_password: '',
		confirm_password: '',
	})

	const [error, setError] = useState('')

	const currentPasswordChangeHandler = current_password => {
		setFormData({ ...FormData, current_password: current_password })
	}

	const newPasswordChangeHandler = new_password => {
		setFormData({ ...FormData, new_password: new_password })
	}
	const confirmPasswordChangeHandler = confirm_password => {
		setFormData({ ...FormData, confirm_password: confirm_password })
	}

	const SignUpLinkHandler = () => {
		navigation.push('SignUp')
	}

	const handleSignIn = async () => {
		try {
			const response = await User.updatePassword(FormData)
			console.log(response)
			if (response.status === 'success') {
                navigation.goBack()
				Alert.alert('Успешно', 'Ваш пароль успешно обновлен')
			} else {
				setError(response.message || 'Неправильный пароль')
			}
		} catch (error) {
			console.error('Произошла ошибка при изменений:', error)
			setError('Произошла ошибка при изменений пароля. Пожалуйста, попробуйте еще раз.')
		}
	}

	const ForgetPasswordLinkHandler = () => {
		navigation.push('ForgetPassword', { email: FormData.email })
	}

	return (
		<View className='bg-white p-5 rounded-xl' style={styles.container}>
			<Text className='font-semibold text-2xl text-center'>
				Изменить пароль
			</Text>
			<View style={styles.formContainer}>
				<PasswordInput
					Password={FormData.current_password}
					onChangePassword={currentPasswordChangeHandler}
					text='Текущий пароль'
				/>
				<PasswordInput
					Password={FormData.new_password}
					onChangePassword={newPasswordChangeHandler}
					text='Новый пароль'
				/>
				<PasswordInput
					Password={FormData.confirm_password}
					onChangePassword={confirmPasswordChangeHandler}
					text='Подтвердите новый пароль'
				/>
				{error ? <Text style={styles.errorText}>{error}</Text> : null}
				<GreenButton text={'Изменить'} onPress={handleSignIn} />
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
	errorText: {
		color: 'red',
		fontSize: 14,
		textAlign: 'center',
		marginTop: 10,
	},
})
