import React from 'react'
import { StyleSheet, View } from 'react-native'
import SettingButton from '../Buttons/SettingButton'
import HeaderTitleText from './UI/HeaderTitleText'

export default function HeaderProfileScreen({ navigation }) {
	const moveToSetting = () => {
		navigation.push('Setting')
	}
	return (
		<View
			className='justify-between flex-row items-center'
			style={styles.container}
		>
			<HeaderTitleText text={'Профиль'} />
			<SettingButton onPress={moveToSetting} />
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
