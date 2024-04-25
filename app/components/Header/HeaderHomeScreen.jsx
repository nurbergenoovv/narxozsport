import React from 'react'
import { StyleSheet, View } from 'react-native'
import News from '../../services/News'
import NotificationButton from '../Buttons/NotificationButton'
import HeaderTitleText from './UI/HeaderTitleText'

export default function HeaderHomeScreen({
	navigation,
	list,
	count_not_viewed,
}) {
	const viewed = async () => {
		try {
			const response = await News.viewedNotification()
			if (response.status === 'success') {
				console.log('Viewed')
			}
		} catch (e) {
			console.error(e)
		}
		console.log('viewed')
	}

	return (
		<View
			className='justify-between flex-row items-center'
			style={styles.container}
		>
			<HeaderTitleText text={'Новости'} />
			<NotificationButton
				count={count_not_viewed}
				onPress={() => {
					navigation.push('Notifications', { list: list })
					viewed()
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
})
