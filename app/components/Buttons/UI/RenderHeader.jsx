import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../../const/colors'

export default function renderHeader(section, _, isActive) {
	return (
		<View style={styles.accordHeader}>
			<Text style={styles.accordTitle} className="font-semibold">{section.title}</Text>
			<MaterialCommunityIcons
				name={isActive ? 'chevron-up' : 'chevron-down'}
				size={32}
				color={colors.primary}
				style={styles.pencil}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	accordHeader: {
		width: '100%',
		paddingHorizontal: 15,
		backgroundColor: 'white',
		paddingVertical: 15,
		borderRadius: 10,
		shadowColor: colors.opacityGray,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom:15,
	},
	accordTitle: {
		fontSize: 15,
	},
})
