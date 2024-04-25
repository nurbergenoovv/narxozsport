import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import {
	ActivityIndicator,
	Alert,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View,
	RefreshControl
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DefaultWhiteButton from '../../components/Buttons/DefaultWhiteButton'
import ProfileUserCard from '../../components/CardComponents/ProfileUserCard'
import HeaderProfileScreen from '../../components/Header/HeaderProfileScreen'
import colors from '../../const/colors'
import { useAuth } from '../../Hooks/useAuth'
import User from '../../services/User'
import styles from './ProfileStyle'

export default function SProfile({ navigation }) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});
	const { isAuth, setIsAuth } = useAuth();
	const [isRefreshing, setIsRefreshing] = useState(false); // State for refreshing

	const getInformation = async () => {
		setIsLoading(true);
		const response = await User.information();
		setIsLoading(false);
		if (response.status === 'success') {
			setData(response.user_info);
		} else {
			console.log(response.message);
			setIsAuth(false);
			Alert.alert(
				'Авторизация',
				'В ваш аккаунт был выполнен вход с другого устройства, пожалуйста, попробуйте еще раз'
			);
		}
	};

	const onRefresh = () => {
		setIsRefreshing(true); // Set refreshing state to true
		getInformation(); // Fetch user information
		setIsRefreshing(false); // Set refreshing state back to false when done
	};

	useFocusEffect(
		useCallback(() => {
			if (User.check_token()) {
				getInformation();
			}
		}, [navigation])
	);

	return (
		<SafeAreaView className='flex-1 items-center'>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', zIndex: 1, top: '60%' }}
				/>
			)}
			<HeaderProfileScreen navigation={navigation} />
			<ScrollView style={styles.container} refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
				}>
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
						<ProfileUserCard
							data={data}
							reload={getInformation}
							navigation={navigation}
						/>
					</View>
					<DefaultWhiteButton
						text={'Изменить пароль'}
						onPress={() => {
							navigation.push('ChangePassword')
						}}
					/>
					{data.verify === 0 ? (
						<DefaultWhiteButton
							text={'Пройти верификацию'}
							onPress={() => {
								navigation.push('Verification', { email: data.email })
							}}
						/>
					) : (
						<></>
					)}

					{data.role === 'Student' ? (
						<>
							{data.type_section === 1 ? (
								<DefaultWhiteButton
									text={'Справка ВКК'}
									onPress={() => {
										navigation.push('MedicalCertificate', { email: data.email })
									}}
								/>
							) : (
								<></>
							)}
							<DefaultWhiteButton
								text={'История посещения'}
								onPress={() => {
									navigation.push('HistoryVisits')
								}}
							/>
						</>
					) : data.role === 'Trainer' ? (
						<></>
					) : (
						<></>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
