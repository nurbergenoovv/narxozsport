import React, { useEffect, useRef, useState } from 'react'
import {
	Alert,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import colors from '../../const/colors'
import styles from './OTPStyle'

export default function SVerification({ navigation, route }) {
	const { email } = route.params
	const [otp, setOtp] = useState(['', '', '', ''])
	const otpInputs = useRef([])
	const [errorMessage, setErrorMessage] = useState('')
	const [resendVisible, setResendVisible] = useState(true)
	const [countdown, setCountdown] = useState(59)
	const [code, setCode] = useState('')
	const [submitted, setSubmitted] = useState(false)

	useEffect(() => {
		let interval
		setResendVisible(true)

		if (countdown > 0) {
			interval = setInterval(() => {
				setCountdown(prevCountdown => {
					if (prevCountdown === 0) {
						clearInterval(interval)
						setResendVisible(true)
						return 0
					} else {
						return prevCountdown - 1
					}
				})
			}, 1000)
		}

		return () => clearInterval(interval)
	}, [countdown])

	const handleChangeOtp = (index, value) => {
		setErrorMessage('')
		if (!isNaN(value) || value === '') {
			const newOtp = [...otp]
			newOtp[index] = value
			setOtp(newOtp)

			if (value === '' && index > 0) {
				otpInputs.current[index - 1].focus()
			} else if (value !== '' && index < 3) {
				otpInputs.current[index + 1].focus()
			}
		}
	}

	const handleResendUpPress = () => {
		setCountdown(59)
	}

	const handleSubmit = () => {
		const enteredOtp = otp.join('')
		const randomNumber = Math.floor(1000 + Math.random() * 9000) // Simulate generating a random code
		if (enteredOtp.length === 4) {
			if (code === enteredOtp) {
				Alert.alert(
					'Verification successful',
					'Verification successful message'
				)
				navigation.goBack()
			} else {
				Alert.alert('Error', 'Incorrect Verification Code')
			}
		} else {
			setErrorMessage(
				enteredOtp.length === 4 ? 'Incorrect OTP' : 'Please enter a 4-digit OTP'
			)
			setOtp(['', '', '', ''])

			setTimeout(() => {
				setErrorMessage('')
			}, 5000)
		}
	}

	useEffect(() => {
		if (otp.filter(item => item !== '').length === 4) {
			handleSubmit()
		}
	}, [otp])

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
			<HeaderGoBack
				pageName={'Верификация'}
				navigation={navigation}
				background='red'
			/>
			<View className='h-full mt-1'>
				<View style={styles.top}>
					<MaterialCommunityIcons
						name='check-circle-outline'
						size={125}
						color={colors.opacityWhiteV2}
					/>
				</View>
				<ScrollView
					contentContainerStyle={styles.scrollContainer}
					vertical={false}
				>
					<View style={styles.topLine}></View>
					<Text style={styles.firsttext}>Верификация</Text>
					<Text style={styles.secondtext}>
						Мы отправили вам код на почту {email}
					</Text>
					<View style={styles.otpContainer}>
						{otp.map((value, index) => (
							<TextInput
								key={index}
								style={styles.otpInput}
								value={value}
								onChangeText={text => handleChangeOtp(index, text)}
								ref={input => (otpInputs.current[index] = input)}
								keyboardType='numeric'
								maxLength={1}
							/>
						))}
					</View>
					{countdown > 0 ? (
						<TouchableOpacity style={styles.resendButton}>
							<Text style={styles.resendText}>
								Повторно отправить ({countdown})
							</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={handleResendUpPress}
							style={styles.resendButtonT}
						>
							<Text style={styles.resendTextT}>Повторно отправить</Text>
						</TouchableOpacity>
					)}
					{errorMessage !== '' && (
						<View style={styles.errorMessage}>
							<Text style={styles.errorMessageText}>{errorMessage}</Text>
						</View>
					)}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}
