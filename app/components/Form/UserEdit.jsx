import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState } from 'react'
import {
	ActivityIndicator,
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'
import User from '../../services/User'
import Dropdown from '../Buttons/DropDown'
import GreenButton from '../Buttons/GreenButton'
import TextMedium from '../TextPlace/TextMedium'
import DateInput from './UI/DateInput'
import EmailInput from './UI/EmailInput'
import PhoneNumberInput from './UI/PhoneNumberInput'
import TextInputCustom from './UI/TextInputCustom'

export default function UserEdit({ navigation, data }) {
	const [image, setImage] = useState(data.profile_photo || '')
	const [formData, setFormData] = useState({
		email: data.email,
		first_name: data.first_name,
		last_name: data.last_name,
		birth_date: data.birth_date,
		phone_number: data.phone_number,
		type_section: data.type_section,
		profile_photo: image,
	})

	const [selectedOption, setSelectedOption] = useState(
		data.type_section === 1 ? 'ЛФК' : 'Обычный'
	)

	const [isLoading, setLoading] = useState(false)
	const [uploading, setUploading] = useState(false)

	const options = ['ЛФК', 'Обычный']

	const pickImage = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				quality: 1,
				aspectRatio: [1, 1]
			})

			if (!result.canceled) {
				const FormDataa = new FormData()

				const imageType = result.assets[0].mimeType
				console.log()

				FormDataa.append('image', {
					uri: result.assets[0].uri,
					type: imageType,
					name: result.assets[0].uri.split('/').pop(),
				})
				setLoading(true)
				setUploading(true)
				const response = await User.uploadPhoto(FormDataa)
				ImageChangeHandler(`https://clickme.kz/${response.path}`)
				setLoading(false)
				setUploading(false)
			} else {
				console.log('Image selection cancelled.')
			}
		} catch (error) {
			console.error('Error picking image:', error)
		}
		console.log(formData)
	}

	const handleSelect = option => {
		setSelectedOption(option)
	}

	const handleButtonChange = async () => {
		try {
			setLoading(true)
			const response = await User.updateData(formData)
			setLoading(false)
			if (response.status === 'success') {
				navigation.goBack()
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
	const ImageChangeHandler = async path => {
		setImage(path)
		setFormData(prevState => ({ ...prevState, profile_photo: path }))
	}

	useEffect(() => {
		setFormData(prevState => ({
			...prevState,
			type_section: selectedOption === 'ЛФК' ? 1 : 0,
		}))
	}, [selectedOption])

	return (
		<View className='p-5 rounded-xl px-6' style={styles.container}>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 1 }}
				/>
			)}
			<View style={styles.formContainer} className='w-full items-center'>
				<TouchableOpacity
					className=''
					style={[
						{ borderRadius: 60, borderColor: colors.primary },
						{
							width: 120,
							height: 120,
							borderWidth: 4,
							padding: 2,
						},
					]}
					onPress={pickImage}
				>
					<View
						style={{
							position: 'absolute',
							zIndex: 3,
							bottom: -5,
							right: -5,
							padding: 4,
							backgroundColor: 'white',
						}}
						className='rounded-full'
					>
						<MaterialCommunityIcons
							name={'image-edit-outline'}
							size={28}
							color={colors.primary}
						/>
					</View>

					<Image
						source={{ uri: formData.profile_photo }}
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 55,
						}}
					/>
				</TouchableOpacity>
				{uploading && (
					<Text className='text-[12px] font-semibold mt-[-5px]'>
						Загрузка фотографий ...
					</Text>
				)}
				<TextInputCustom
					text={'Имя'}
					placeholder={'Ваше имя'}
					onChangeText={firstNameChangeHandler}
					value={formData.first_name}
				/>
				<TextInputCustom
					text={'Фамилия'}
					placeholder={'Ваша фамилия'}
					onChangeText={lastNameChangeHandler}
					value={formData.last_name}
				/>
				<DateInput
					onChangeDate={birthdayChangeHandler}
					date={formData.birth_date}
				/>
				<PhoneNumberInput
					phoneNumber={formData.phone_number}
					onChangePhoneNumber={phoneNumberChangeHandler}
				/>
				<EmailInput Email={formData.email} onChangeEmail={emailChangeHandler} />
				<View
					style={{ 
						backgroundColor: colors.opacityWhiteV1, 
						gap: 10 
					}}
					className='p-2 rounded-lg pb-3 w-[100%]'
				>
					<TextMedium text={'Тип секций:'} />
					<Dropdown
						options={options}
						onSelect={handleSelect}
						sOption={selectedOption}
					/>
				</View>
				<GreenButton
					text={'Изменить'}
					onPress={handleButtonChange}
					isLoading={isLoading}
					
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
