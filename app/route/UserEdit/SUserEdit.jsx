import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import UserEdit from '../../components/Form/UserEdit'
import HeaderGoBack from '../../components/Header/HeaderGoBack'

const SUserEdit = ({ navigation, route }) => {
	const { data } = route.params
	
	return (
		<SafeAreaView className='mt-2'>
			<HeaderGoBack
				pageName={'Изменить данные профиля'}
				navigation={navigation}
			/>
			<ScrollView>
				<UserEdit data={data} navigation={navigation}/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SUserEdit
