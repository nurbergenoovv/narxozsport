import React, { useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'
import AuthForm from '../../../components/Form/AuthForm'
import styles from './SignInStyle'
import colors from '../../../const/colors'

export default function SignIn({ navigation }) {
	const [isLoading, setIsLoading] = useState(false) // Initial state is false

	return (
		<SafeAreaView style={styles.main}>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', zIndex: 1, top: '50%' }}
				/>
			)}
			<View
				style={styles.container}
				className='flex justify-center items-center'
			>
				<Text className='uppercase font-extrabold text-2xl text-white text-center'>
					Narxoz Sport
				</Text>
				<AuthForm navigation={navigation} setIsLoading={setIsLoading} />
			</View>
		</SafeAreaView>
	)
}
