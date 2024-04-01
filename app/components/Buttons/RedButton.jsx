import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../const/colors'

export default function RedButton({text, onPress}) {
  return (
	<TouchableOpacity className="justify-center items-center py-5 rounded-lg" style={styles.container} onPress={onPress}>
	  <Text className="text-xl font-semibold text-white">{text}</Text>
	</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	container:{
        width: '100%',
		backgroundColor:colors.primary
    }
})