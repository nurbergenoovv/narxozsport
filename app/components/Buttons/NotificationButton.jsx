import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NotificationCount from './UI/NotificationCount'

export default function NotificationButton({ onPress, count }) {
	return (
		<TouchableOpacity onPress={onPress}>
			{count > 0 && (
				<NotificationCount count={count}/>
			)}
			<MaterialCommunityIcons name='bell-outline' size={28} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({})
