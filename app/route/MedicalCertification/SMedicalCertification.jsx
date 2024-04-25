import { useFocusEffect } from '@react-navigation/native'
import * as DocumentPicker from 'expo-document-picker'
import React, { useCallback, useState } from 'react'
import {
	ActivityIndicator,
	Alert,
	Linking,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import colors from '../../const/colors'
import User from '../../services/User'

export default function SMedicalCertification({ navigation, route }) {
	const { email } = route.params
	const [isLoading, setLoading] = useState(false)
	const [data, setData] = useState({
		certificate: '',
	})

	useFocusEffect(
		useCallback(() => {
			fetchData()
		}, [navigation])
	)

	const fetchData = async () => {
		setLoading(true)
		try {
			const res = await User.getUserMedicalCertificate()
			if (res.status === 'success') {
				setData({ certificate: res.url })
			} else {
				setData({ certificate: '' })
			}
			console.log(res)
		} catch (error) {
			console.error('Error fetching user medical certificate:', error)
		} finally {
			setLoading(false)
		}
	}

	async function pickDocument() {
		const result = await DocumentPicker.getDocumentAsync({
			type: 'application/pdf',
		})

		if (result) {
			const name = `${email.split('.')[0]}${email.split('.')[1]}.${
				result.assets[0].mimeType.split('/')[1]
			}`
			const FormDataa = new FormData()

			FormDataa.append('pdf', {
				uri: result.assets[0].uri,
				type: result.assets[0].mimeType,
				name: name || '',
			})
			setLoading(true)
			let response = await User.uploadMedicalCertificate(FormDataa)
			if (response.status === 'success') {
				const resp = await User.addUserMedicalCertificate(
					`https://clickme.kz/${response.path}`
				)
				console.log(resp)
				setLoading(false)
				if (resp.status === 'success') {
					setData({
						certificate: `https://clickme.kz/${response.path}`,
					})
				}
			}
		} else if (type === 'cancel') {
			console.log('Операция выбора файла отменена')
		} else {
			console.error('Произошла ошибка при выборе файла:', error)
		}
	}

	const deleteCertificate = async () => {
		try {
			const response = await User.deleteUserMedicalCertificate()
			console.log(response)
			if (response.status === 'success') {
				setData({
					certificate: '',
				})
				Alert.alert('Успешно', 'Ваша сертификата успешно удалена')
			}
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<SafeAreaView>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', top: '55%', left: '45%', zIndex: 1 }}
				/>
			)}
			<HeaderGoBack pageName={'Справка ВКК'} navigation={navigation} />
			<View
				className='justify-center items-center'
				style={{ height: '98%', paddingHorizontal: 20 }}
			>
				{data.certificate != '' ? (
					<View style={styles.main2}>
						<TouchableOpacity
							className='w-full p-3 flex-row items-center justify-between'
							style={styles.container}
							onPress={() => {
								console.log(data)
								Linking.openURL(data.certificate)
							}}
						>
							<Text className='text-black font-semibold text-sm'>Открыть</Text>
							<MaterialCommunityIcons
								name='chevron-right'
								size={32}
								color={colors.primary}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							className='w-full p-3 flex-row items-center justify-between'
							style={styles.container}
							onPress={deleteCertificate}
						>
							<Text className='text-black font-semibold text-sm'>Удалить</Text>
							<MaterialCommunityIcons
								name='chevron-right'
								size={32}
								color={colors.primary}
							/>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.main1}>
						<Text
							className='text-black font-semibold text-[12px]'
							style={{ textAlign: 'left', width: '100%', marginLeft: 5 }}
						>
							У вас не найдено прикрепленных справки ВКК
						</Text>
						<TouchableOpacity
							className='w-full p-3 flex-row items-center justify-between'
							style={styles.container}
							onPress={pickDocument}
						>
							<Text className='text-black font-semibold text-sm'>Добавить</Text>
							<MaterialCommunityIcons
								name='chevron-right'
								size={32}
								color={colors.primary}
							/>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main1: {
		width: '100%',
		paddingVertical: 10,
		alignItems: 'center',
		marginTop: 15,
		height: '98%',
		gap: 10,
	},
	main2: {
		width: '100%',
		alignItems: 'center',
		marginTop: 15,
		height: '98%',
		paddingVertical: 20,
		gap: 10,
	},
	container: {
		width: '100%',
		paddingHorizontal: 15,
		backgroundColor: 'white',
		paddingVertical: 23,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		gap: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})
