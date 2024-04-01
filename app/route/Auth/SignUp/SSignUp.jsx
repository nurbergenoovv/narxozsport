import React from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import AuthForm from '../../../components/Form/AuthForm'
import styles from './SignUpStyle'
import RegisterForm from '../../../components/Form/RegisterForm'

export default function SSignUp({ navigation }) {
	return (
		<ScrollView style={styles.main} >
			<View
				style={styles.container}
				className='flex justify-center items-center'
			>
				<Text className='uppercase font-extrabold text-2xl text-white text-center'>
					Narxoz Sport
				</Text>
				<RegisterForm navigation={navigation} />
			</View>
		</ScrollView>
	)
}
