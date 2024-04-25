import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'

export default function MenuButton({ text, icon, onPress }) {
	return (
		<TouchableOpacity
			style={{ maxWidth: 90, alignItems: 'center', justifyContent: 'center', gap: 5 }}
			onPress={onPress}
		>
			<View
				style={{
					backgroundColor: colors.opacityWhiteV2,
					padding: 12,
					borderRadius: 11,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<MaterialCommunityIcons name={icon} size={30} color={colors.primary} />
			</View>
			<Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 10 }}>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({})
