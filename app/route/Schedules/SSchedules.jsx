import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, RefreshControl } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScheduleCard from '../../components/CardComponents/ScheduleCard';
import HeaderGoBack from '../../components/Header/HeaderGoBack';
import TextSmallGray from '../../components/TextPlace/TextSmallGray';
import colors from '../../const/colors';
import Sections from '../../services/Sections';

export default function SSchedules({ navigation }) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const [isRefreshing, setIsRefreshing] = useState(false); // State for refreshing

	const fetchSections = async () => {
		try {
			setIsLoading(true);
			const response = await Sections.getUserSubscribedSections();
			setIsLoading(false);
			if (response.status === 'success') {
				setData(response.sections_grouped);
			} else {
				console.log(response.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onRefresh = () => {
		setIsRefreshing(true); // Set refreshing state to true
		fetchSections(); // Fetch section data
		setIsRefreshing(false); // Set refreshing state back to false when done
	};

	useFocusEffect(
		useCallback(() => {
			fetchSections();
		}, [navigation])
	)
	return (
		<SafeAreaView className='pt-2'>
			<HeaderGoBack
				pageName={'Расписания спортивной секций'}
				navigation={navigation}
			/>
			<ScrollView className='w-full mt-2 px-5' style={{ height: '98%' }} refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
				}>
				<View className='pb-7 pt-4'>
					{data.length > 0 ? (
						data.map((item, index) => (
							<View key={index} style={{ gap: 5 }}>
								<TextSmallGray text={item.day} />
								{item.sections.map((section, index) => {
									console.log(section)
									return (
										<ScheduleCard
											data={section}
											key={index}
											navigation={navigation}
										/>
									)
								})}
							</View>
						))
					) : (
						<View
							style={{
								width: '100%',
								flex: 1,
								paddingVertical: '80%',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<MaterialCommunityIcons
								name='bullhorn'
								size={72}
								color={colors.opacityGray}
							/>
							<Text
								style={{ color: colors.opacityGray, textAlign: 'center' }}
							>{`У вас\nбронированных\nсекций не найдено`}</Text>
						</View>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
