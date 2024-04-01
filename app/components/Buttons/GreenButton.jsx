import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../const/colors'

export default function GreenButton({text, onPress}) {
  return (
	<TouchableOpacity className="justify-center items-center py-3 rounded-lg" style={styles.container} onPress={onPress}>
	  <Text className="text-xl font-semibold text-white">{text}</Text>
	</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	container:{
        width: '100%',
		backgroundColor:colors.success
    }
})