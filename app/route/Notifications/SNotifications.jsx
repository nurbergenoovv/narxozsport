import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HeaderNotificationScreen from '../../components/Header/HeaderNotificationScreen'
import colors from '../../const/colors'
import User from '../../services/User'
import styles from './NotificationsStyle'

export default function SNotifications({ navigation, route }) {
	const { list } = route.params
	const [data, setData] = useState(list)
	const onPress = async () => {
		console.log('Click')
		try {
			const response = await User.clearNotifications()
			console.log(response)
			if (response.status == 'success') {
				setData([])
			}
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<SafeAreaView className='flex-1 items-center pt-2'>
			<HeaderNotificationScreen navigation={navigation} onPress={onPress} />
			<ScrollView style={styles.scrollContainer} className='mt-4'>
				{data.length > 0 ? (
					<View className='bg-white' style={styles.newsContainer}>
						{data.map(listItem => (
							<View
								key={listItem.id}
								className='py-2 px-2 rounded-lg'
								style={{
									backgroundColor:
										listItem.view == 1
											? colors.opacityWhiteV2
											: colors.opacityWhiteV2,
								}}
							>
								{listItem.view == 1 ? (
									<></>
								) : (
									<View
										className='w-3 h-3  absolute right-[-5] top-[-5] rounded-2xl'
										style={{ backgroundColor: colors.primary }}
									></View>
								)}
								<Text>{listItem.date}</Text>
								<Text className='text-lg font-semibold'>{listItem.title}</Text>
								<Text>{listItem.description}</Text>
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
