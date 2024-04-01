import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SettingButton({ onPress}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<MaterialCommunityIcons name='cog-outline' size={28} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({})
