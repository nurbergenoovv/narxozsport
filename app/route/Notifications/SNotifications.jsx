import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import colors from '../../const/colors'
import styles from './NotificationsStyle'

export default function SNotifications({ navigation, route }) {
	const [selectedOption, setSelectedOption] = useState('')
	const { list } = route.params

	const options = ['Қазақ', 'Руский', 'English']

	const handleSelect = option => {
		setSelectedOption(option)
	}
	return (
			<SafeAreaView className='flex-1 items-center pt-2'>
				<HeaderGoBack navigation={navigation} pageName={'Уведомлений'} />
				<ScrollView style={styles.scrollContainer}>
					{list.length > 0 ? (
						<View className='bg-white' style={styles.newsContainer}>
							{list.map(listItem => (
								<View
									key={listItem.id}
									className='py-5 bg-gray-300 px-2 rounded-lg'
								>
									<Text>{listItem.title}</Text>
								</View>
							))}
						</View>
					) : (
						<View style={styles.container}>
							<MaterialCommunityIcons
								name='bullhorn'
								size={72}
								color={colors.opacityGray}
							/>
							<Text style={{ color: colors.opacityGray }}>Не найдено</Text>
						</View>
					)}
				</ScrollView>
			</SafeAreaView>
	)
}
