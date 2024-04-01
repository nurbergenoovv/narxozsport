import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import colors from '../../const/colors'

export default function BlueLinkText({ onPress, text, align }) {
	if (!align) {
		align = 'center'
	}
	return (
		<TouchableOpacity onPress={onPress}>
			<Text
				className='text-sm font-semibold'
				style={{ textAlign: align, color: colors.linkColor }}
			>
				{text}
			</Text>
		</TouchableOpacity>
	)
}
