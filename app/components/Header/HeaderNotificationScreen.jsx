import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'
import User from '../../services/User'

export default function HeaderNotificationScreen({ navigation, onPress }) {
	
	return (
		<View className='w-full flex-row justify-center items-center px-5 mt-2'>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack()
				}}
				style={{ position: 'absolute', left: 20 }}
			>
				<MaterialCommunityIcons
					name={'chevron-left'}
					size={36}
					color={colors.primary}
				/>
			</TouchableOpacity>
			<Text
				className='text-center text-base font-semibold'
				style={{
					color: colors.black,
				}}
			>
				Уведомлений
			</Text>
			<TouchableOpacity
				onPress={onPress}
				style={{ position: 'absolute', right: 20 }}
			>
				<MaterialCommunityIcons
					name='delete-sweep-outline'
					size={28}
				/>
			</TouchableOpacity>
		</View>
	)
}
