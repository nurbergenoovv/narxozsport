import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'

export default function DefaultWhiteButton({onPress, text}) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text className="text-sm font-semibold" >{text}</Text>
			<MaterialCommunityIcons
				name={'chevron-right'}
				size={24}
				color={colors.primary}
				style={styles.pencil}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 15,
		backgroundColor: 'white',
		paddingVertical: 23,
		paddingBottom: 25,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		gap: 5,
		display:'flex',
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems:'center'
	},
})
