import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import ChangePasswordForm from '../../components/Form/ChangePasswordForm'
import HeaderGoBack from '../../components/Header/HeaderGoBack'

export default function SUserPasswordUpdate({ navigation }) {
	return (
		<SafeAreaView className='mt-2'>
			<HeaderGoBack pageName={'Изменить пароль'} navigation={navigation} />
			<ScrollView className="w-full h-full p-5">
				<View className='h-full justify-center items-center'>
					<ChangePasswordForm navigation={navigation}/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
