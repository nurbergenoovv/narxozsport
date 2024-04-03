import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import colors from '../../const/colors'
import User from '../../services/User'
import DefaultWhiteButton from '../Buttons/DefaultWhiteButton'
import Dropdown from '../Buttons/DropDown'
import GreenButton from '../Buttons/GreenButton'
import TextMedium from '../TextPlace/TextMedium'
import DateInput from './UI/DateInput'
import EmailInput from './UI/EmailInput'
import PhoneNumberInput from './UI/PhoneNumberInput'
import TextInputCustom from './UI/TextInputCustom'

export default function UserEdit({ goBack, data }) {
	const [FormData, setFormData] = useState({
		email: data.email,
		first_name: data.first_name,
		last_name: data.last_name,
		birth_date: data.birth_date,
		phone_number: data.phone_number,
		type_section: data.type_section,
	})

	const [selectedOption, setSelectedOption] = useState(
		data.type_section === 1 ? 'ЛФК' : 'Обычный'
	)

	const options = ['ЛФК', 'Обычный']

	const [image, setImage] = useState(data.profile_photo || '')

	const handleSelect = option => {
		setSelectedOption(option)
	}

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		})

		if (!result.cancelled) {
			setImage(result.uri)
		} else {
			Alert.alert('You did not select any image.')
		}
	}

	const handleButtonChange = async () => {
		try {
			const response = await User.updateData(FormData)

			if (response.status === 'success') {
				goBack()
			} else {
				Alert.alert(
					'Error',
					response.message || 'An error occurred while updating user data.'
				)
			}
		} catch (error) {
			console.error('Error updating data:', error)
			Alert.alert('Error', 'An error occurred while updating user data.')
		}
	}

	const emailChangeHandler = email => {
		setFormData(prevState => ({ ...prevState, email: email }))
	}

	const firstNameChangeHandler = firstName => {
		setFormData(prevState => ({ ...prevState, first_name: firstName }))
	}

	const lastNameChangeHandler = lastName => {
		setFormData(prevState => ({ ...prevState, last_name: lastName }))
	}

	const birthdayChangeHandler = birthday => {
		setFormData(prevState => ({ ...prevState, birth_date: birthday }))
	}

	const phoneNumberChangeHandler = phoneNumber => {
		setFormData(prevState => ({ ...prevState, phone_number: phoneNumber }))
	}

	useEffect(() => {
		setFormData(prevState => ({
			...prevState,
			type_section: selectedOption === 'ЛФК' ? 1 : 0,
		}))
	}, [selectedOption])

	return (
		<View className='p-5 rounded-xl' style={styles.container}>
			<View style={styles.formContainer}>
				<TextInputCustom
					text={'Имя'}
					placeholder={'Ваше имя'}
					onChangeText={firstNameChangeHandler}
					value={FormData.first_name}
				/>
				<TextInputCustom
					text={'Фамилия'}
					placeholder={'Ваша фамилия'}
					onChangeText={lastNameChangeHandler}
					value={FormData.last_name}
				/>
				<DateInput
					onChangeDate={birthdayChangeHandler}
					date={FormData.birth_date}
				/>
				<PhoneNumberInput
					phoneNumber={FormData.phone_number}
					onChangePhoneNumber={phoneNumberChangeHandler}
				/>
				<EmailInput Email={FormData.email} onChangeEmail={emailChangeHandler} />
				<View
					className='p-2 rounded-lg pb-3'
					style={{ backgroundColor: colors.opacityWhiteV1, gap: 10 }}
				>
					<TextMedium text={'Тип секций:'} />
					<Dropdown options={options} onSelect={handleSelect} sOption={selectedOption}/>
				</View>
				<View
					className='p-2 rounded-lg pb-3'
					style={{ backgroundColor: colors.opacityWhiteV1, gap: 10 }}
				>
					<TextMedium text={'Аватарка:'} />
					<DefaultWhiteButton
						text={'Изменить аватарку'}
						onPress={pickImageAsync}
					/>
				</View>
				<GreenButton text={'Изменить'} onPress={handleButtonChange} />
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
