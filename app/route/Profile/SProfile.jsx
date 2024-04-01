import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DefaultWhiteButton from '../../components/Buttons/DefaultWhiteButton'
import ProfileUserCard from '../../components/CardComponents/ProfileUserCard'
import HeaderProfileScreen from '../../components/Header/HeaderProfileScreen'
import colors from '../../const/colors'
import styles from './ProfileStyle'

export default function SProfile({navigation}) {
	const [data, setData] = useState({
		fist_name: 'Ибрахим',
		last_name: 'Нурберген',
		email: 'example@narxoz.kz',
		phone: '+7 (777) 777 77 77',
		gender: 'Мужской',
		birthdate: '01-01-1990',
		avatar: 'https://clickme.kz/photo.png',
		verified: 1,
	})
	
	return (
		<SafeAreaView className='flex-1 items-center'>
			<HeaderProfileScreen navigation={navigation}/>
			<ScrollView style={styles.container}>
				<View style={styles.container2} className="py-3">
					<View style={styles.WhiteContainer}>
						<MaterialCommunityIcons
							name={'pencil-outline'}
							size={24}
							color={colors.primary}
							style={styles.pencil}
						/>

						<ProfileUserCard data={data} />
					</View>

					<DefaultWhiteButton text={'Пройти верификацию'} />
					<DefaultWhiteButton text={'История посещения секций'} />
					<DefaultWhiteButton text={'История пропусков секций'} />
					<DefaultWhiteButton text={'Справка ВКК'} />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
