import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import {
	ActivityIndicator,
	Alert,
	Linking,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RedButton from '../../components/Buttons/RedButton'
import UserAvatar from '../../components/CardComponents/UserAvatar'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextMedium from '../../components/TextPlace/TextMedium'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors'
import User from '../../services/User'

export default function SAboutStudent({ navigation, route }) {
	const [isLoading, setIsLoading] = useState(false)
	const { data } = route.params
	const [student, setStudent] = useState({})
	const fetchStudentInformation = async () => {
		try {
			setIsLoading(true)
			const response = await User.getInformationById(data.user_id)
			setIsLoading(false)
			if (response.status === 'success') {
				setStudent(response.student)
				// console.log(response.student)
			}
		} catch (e) {
			console.error(e)
		}
	}

	const updateStatus = async status => {
		setIsLoading(true)
		const response = await User.setApplication(status, data.id)
		setIsLoading(false)
		if (response.status === 'success') {
			navigation.goBack()
			Alert.alert('Successfully updated')
		} else {
			Alert.alert('Error', response.message)
		}
	}

	useFocusEffect(
		useCallback(() => {
			fetchStudentInformation()
			console.log(data)
		}, [navigation])
	)
	return (
		<SafeAreaView className=''>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', zIndex: 1, top: '60%', width: '100%' }}
				/>
			)}
			<HeaderGoBack pageName={'Профиль студента'} navigation={navigation} />
			<ScrollView className='px-5'>
				<View className='w-full justify-center items-center mt-7'>
					<UserAvatar
						link={student.profile_photo}
						width={100}
						height={100}
						padding={3}
						borderWidth={3}
					/>
					<View className='text-center items-center' style={{ gap: -5 }}>
						<Text className='mt-[10px] font-semibold text-2xl'>{`${student.last_name} ${student.first_name}`}</Text>
						<TextSmallGray text={'Студент Университета Нархоз'} />
					</View>
				</View>
				<View className='mt-5'>
					<TextSmallGray text={'Справочная информация'} />
					<TextMedium text={`Имя: ${student.first_name}`} />
					<TextMedium text={`Фамилия: ${student.last_name}`} />
					<TextMedium
						text={`Тип секций: ${student.type_section ? 'ЛФК' : 'Обычный'}`}
					/>
					<TextMedium text={`Дата рождения: ${student.birth_date}`} />
					<TextMedium
						text={`Верификация: ${student.verify ? 'Пройдено' : 'Не пройдено'}`}
					/>
				</View>
				<View className='mt-5'>
					<TextSmallGray text={'Контактная информация'} />
					<TextMedium text={`Почта: ${student.email}`} />
					<TextMedium text={`Номер телефона: ${student.phone_number}`} />
				</View>
				<View className='mt-5'>
					<TextSmallGray text={'Статистика посещений'} />
					<TextMedium
						text={`Количество посещенных занятий: ${student.visits}`}
					/>
				</View>
				<View className='mt-5'>
					<TextSmallGray text={'Список занятий'} />
					<TextMedium
						text={`Количество бронированных занятий: ${student.student_sections}`}
					/>
				</View>
				<View className='mt-5' style={{ gap: 5 }}>
					<TextSmallGray text={'Справка ВКК (форма 027/у)'} />
					<RedButton
						text={'Справка ВКК'}
						onPress={() => {
							console.log(student.certificate)
							Linking.openURL(student.certificate)
						}}
					/>
				</View>
				<View className='mt-5' style={{ gap: 5 }}>
					<TextSmallGray text={'Действии: '} />
					<TouchableOpacity
						className='w-full py-5 items-center rounded-lg'
						style={{ backgroundColor: colors.success }}
						onPress={() => {
							updateStatus(1)
						}}
					>
						<Text className='text-white font-semibold text-lg'>Принять</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className='w-full py-5 items-center rounded-lg'
						style={{ backgroundColor: colors.primary }}
						onPress={() => {
							updateStatus(0)
						}}
					>
						<Text className='text-white font-semibold text-lg'>Отклонить</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
