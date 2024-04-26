import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import RedButton from '../../components/Buttons/RedButton'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import { useAuth } from '../../Hooks/useAuth'

export default function SSetting({ navigation }) {
	const { setIsAuth } = useAuth()
	const [selectedOption, setSelectedOption] = useState('')

	const options = ['Қазақ', 'Руский', 'English']

	const handleSelect = option => {
		setSelectedOption(option)
	}

	return (
		<SafeAreaView className='flex-1 items-center pt-2'>
			<HeaderGoBack navigation={navigation} pageName={'Настройки'} />
			<View className='px-5 w-full mt-5' style={{ gap: 15 }}>
				{/* <Dropdown options={options} onSelect={handleSelect} /> */}
				<RedButton
					text={'Выйти'}
					onPress={async () => {
						await AsyncStorage.removeItem('token')
						setIsAuth(false)
					}}
				/>
			</View>
		</SafeAreaView>
	)
}
