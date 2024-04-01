import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../../const/colors'

export default function TextMedium({text}) {
	return <Text style={{color:colors.black, fontSize:15}} className="text-medium">{text}</Text>
}

const styles = StyleSheet.create({})
