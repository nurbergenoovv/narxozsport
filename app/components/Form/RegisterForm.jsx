import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GreenButton from '../Buttons/GreenButton'
import BlueLinkText from '../Link/BlueLinkText'
import ConfirmPasswordInput from './UI/ConfirmPasswordInput'
import DateInput from './UI/DateInput'
import EmailInput from './UI/EmailInput'
import PasswordInput from './UI/PasswordInput'
import PhoneNumberInput from './UI/PhoneNumberInput'
import TextInputCustom from './UI/TextInputCustom'

export default function RegisterForm({ navigation }) {
	const [FormData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		birthday: '',
		phoneNumber: '',
	})
	emailChangeHandler = email => {
		setFormData({ ...FormData, email: email })
	}
	passwordChangeHandler = password => {
		setFormData({ ...FormData, password: password })
	}
	confirmPasswordChangeHandler = confirmPassword => {
		setFormData({ ...FormData, confirmPassword: confirmPassword })
	}
	firstNameChangeHandler = firstName => {
		setFormData({ ...FormData, firstName: firstName })
	}
	lastNameChangeHandler = lastName => {
		setFormData({ ...FormData, lastName: lastName })
	}
	birthdayChangeHandler = birthday => {
		setFormData({ ...FormData, birthday: birthday })
	}
	phoneNumberChangeHandler = phoneNumber => {
		setFormData({ ...FormData, phoneNumber: phoneNumber })
	}
	const SignInLinkHandler = () => {
		navigation.goBack()
	}
	return (
		<View className='bg-white p-5 rounded-xl' style={styles.container}>
			<Text className='font-semibold text-2xl text-center'>Регистрация</Text>
			<View style={styles.formContainer}>
				<TextInputCustom
					text={'Имя'}
					placeholder={'Ваше имя'}
					onChangeText={firstNameChangeHandler}
					value={FormData.firstName}
				/>
				<TextInputCustom
					text={'Фамилия'}
					placeholder={'Ваше фамилия'}
					onChangeText={lastNameChangeHandler}
					value={FormData.lastName}
				/>
				<DateInput
					onChangeDate={birthdayChangeHandler}
					date={FormData.birthday}
				/>
				<PhoneNumberInput
					phoneNumber={FormData.phoneNumber}
					onChangePhoneNumber={phoneNumberChangeHandler}
				/>
				<EmailInput Email={FormData.email} onChangeEmail={emailChangeHandler} />
				<PasswordInput
					Password={FormData.password}
					onChangePassword={passwordChangeHandler}
				/>
				<ConfirmPasswordInput
					ConfirmPassword={FormData.confirmPassword}
					onChangeConfirmPassword={confirmPasswordChangeHandler}
				/>
				<GreenButton text={'Регистрация'} onPress={() => {}} />
				<BlueLinkText
					align={'center'}
					text={'Есть аккаунт ? Войти '}
					onPress={SignInLinkHandler}
				/>
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
