import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextMedium from './TextMedium'
import TextSmallGray from './TextSmallGray'

export default function LabelAndText({ label, text, gap }) {
	return (
		<View style={{gap:gap}}>
			<TextSmallGray text={label} />
			<TextMedium text={text}/>
		</View>
	)
}

const styles = StyleSheet.create({})
