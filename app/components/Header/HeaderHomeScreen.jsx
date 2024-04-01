import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import NotificationButton from '../Buttons/NotificationButton'
import HeaderTitleText from './UI/HeaderTitleText'

export default function HeaderHomeScreen({navigation, list}) {
	
	return (
		<View className='justify-between flex-row items-center' style={styles.container}>
			<HeaderTitleText text={'Новости'} />
			<NotificationButton count={list.length} onPress={()=>navigation.push('Notifications', {list: list})}/>
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
