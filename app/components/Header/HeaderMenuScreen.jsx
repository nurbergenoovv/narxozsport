import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderTitleText from './UI/HeaderTitleText'

export default function HeaderMenuScreen() {
	return (
		<View className='justify-between flex-row items-center' style={styles.container}>
			<HeaderTitleText text={'Меню'} />
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
