import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import ForgetForm from '../../../components/Form/ForgetForm'
import styles from './ForgetPasswordStyle'

export default function SForgetPassword({navigation, route}) {
	const { email } = route.params
	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.container} className="flex justify-center items-center">
				<Text className='uppercase font-extrabold text-2xl text-white text-center'>
					Narxoz Sport
				</Text>
				<ForgetForm navigation={navigation} email={email}/>
			</View>
		</SafeAreaView>
	)
}
