import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import Dropdown from '../../components/Buttons/DropDown'
import RedButton from '../../components/Buttons/RedButton'
import HeaderGoBack from '../../components/Header/HeaderGoBack'

export default function SSetting({ navigation }) {
	const [selectedOption, setSelectedOption] = useState('')

	const options = ['Қазақ', 'Руский', 'English']

	const handleSelect = option => {
		setSelectedOption(option)
	}
	return (
		<SafeAreaView className='flex-1 items-center pt-2'>
			<HeaderGoBack navigation={navigation} pageName={'Настройки'} />
			<View className='px-5 w-full mt-5' style={{ gap: 15 }}>
				<Dropdown options={options} onSelect={handleSelect} />
				<RedButton text={'Выйти'} />
			</View>
		</SafeAreaView>
	)
}
