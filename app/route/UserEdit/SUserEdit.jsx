import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import UserEdit from '../../components/Form/UserEdit'
import HeaderGoBack from '../../components/Header/HeaderGoBack'

const SUserEdit = ({ navigation, route }) => {
	const { data } = route.params
	const goBack = () => {
		navigation.goBack()
	}
	return (
		<SafeAreaView className='mt-2'>
			<HeaderGoBack
				pageName={'Изменить данные профиля'}
				navigation={navigation}
			/>
			<ScrollView>
				<UserEdit data={data} goBack={goBack}/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SUserEdit
