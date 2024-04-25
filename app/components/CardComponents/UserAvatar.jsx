import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../../const/colors'

export default function UserAvatar({
	link,
	width,
	height,
	borderWidth = 4,
	padding = 4,
}) {
	return (
		<View
			className=''
			style={[
				{ borderRadius: 60, borderColor: colors.primary },
				{
					width: width ? width : 120,
					height: height ? height : 120,
					borderWidth: borderWidth ? borderWidth : 4,
					padding: padding,
				},
			]}
		>
			<Image source={{ uri: link }} style={{
				width: '100%',
				height: '100%',
				borderRadius: 55,
			}} />
		</View>
	)
}
