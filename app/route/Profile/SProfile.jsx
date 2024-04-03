import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DefaultWhiteButton from '../../components/Buttons/DefaultWhiteButton'
import ProfileUserCard from '../../components/CardComponents/ProfileUserCard'
import HeaderProfileScreen from '../../components/Header/HeaderProfileScreen'
import colors from '../../const/colors'
import User from '../../services/User'
import styles from './ProfileStyle'

export default function SProfile({ navigation }) {
	const [data, setData] = useState({})

	const getInformation = async () => {
		const response = await User.information()
		if (response.status === 'success') {
			setData(response.user_info)
		}
	}

	useFocusEffect(
		useCallback(() => {
			getInformation()
		}, [navigation])
	)

	return (
		<SafeAreaView className='flex-1 items-center'>
			<HeaderProfileScreen navigation={navigation} />
			<ScrollView style={styles.container}>
				<View style={styles.container2} className='py-3'>
					<View style={styles.WhiteContainer}>
						<TouchableOpacity
							onPress={() => {
								navigation.push('UserEdit', { data: data })
							}}
							style={styles.pencil}
						>
							<MaterialCommunityIcons
								name={'pencil-outline'}
								size={28}
								color={colors.primary}
							/>
						</TouchableOpacity>

						<ProfileUserCard data={data} reload={getInformation} />
					</View>

					<DefaultWhiteButton
						text={'Пройти верификацию'}
						onPress={() => {
							console.log(12)
							navigation.push('Verification', { email: 'qw' })
						}}
					/>
					<DefaultWhiteButton text={'История посещения секций'} />
					<DefaultWhiteButton text={'История пропусков секций'} />
					<DefaultWhiteButton text={'Справка ВКК'} />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
