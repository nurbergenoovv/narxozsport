import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'

export default function HeaderGoBack({
	navigation,
	pageName,
	background = 'white',
}) {
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
					color={background == 'red' ? colors.opacityWhiteV1 : colors.primary}
				/>
			</TouchableOpacity>
			<Text
				className='text-center text-base font-semibold'
				style={{
					color: background == 'red' ? colors.opacityWhiteV1 : colors.black,
				}}
			>
				{pageName}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
