import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'

export default function HeaderGoBack({ navigation, pageName }) {
	const onPress = () => {
		navigation.goBack('Setting')
	}
	return (
		<View className='w-full flex-row justify-center items-center px-5 mt-2'>
			<TouchableOpacity
				onPress={onPress}
				style={{ position: 'absolute', left: 20 }}
			>
				<MaterialCommunityIcons
					name={'chevron-left'}
					size={36}
					color={colors.primary}
					style={styles.pencil}
				/>
			</TouchableOpacity>
			<Text className='text-center text-base font-semibold'>{pageName}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
