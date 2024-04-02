import React from 'react'
import { Text, View } from 'react-native'
import colors from '../../const/colors'

export default function ReviewCard({name, reviewText}) {
	return (
		<View
			className={' p-1 rounded-lg px-2 pb-2'}
			style={{ backgroundColor: colors.opacityWhiteV2 }}
		>
			<Text className={'text-lg font-medium'}>{name}</Text>
			<Text>
				{reviewText}
			</Text>
		</View>
	)
}

