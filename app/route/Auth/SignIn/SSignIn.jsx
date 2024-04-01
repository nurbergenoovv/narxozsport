import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import AuthForm from '../../../components/Form/AuthForm'
import styles from './SignInStyle'

export default function SSignIn({navigation}) {
	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.container} className="flex justify-center items-center">
				<Text className='uppercase font-extrabold text-2xl text-white text-center'>
					Narxoz Sport
				</Text>
				<AuthForm navigation={navigation}/>
			</View>
		</SafeAreaView>
	)
}
