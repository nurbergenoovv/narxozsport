import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../../const/colors'

export default function TextSmallGray({ text}) {
	return (
		<Text className='text-sm font-medium' style={{ color: colors.SmallText,}}>
			{text}
		</Text>
	)
}

const styles = StyleSheet.create({})
