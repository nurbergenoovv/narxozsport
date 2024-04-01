import React from 'react'
import { Image, Text, View } from 'react-native'
import colors from '../../const/colors'

export default function SSplash() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.primary,
			}}
		>
			<Image
				source={require('../../../assets/NarxozSport.png')}
				style={{ width: 200, height: 200 }}
			/>
			<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, position:'absolute', bottom:40}}>
				@nurbergenovv__
			</Text>
		</View>
	)
}
