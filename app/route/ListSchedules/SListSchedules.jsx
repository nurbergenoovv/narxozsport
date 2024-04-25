import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import {
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
	View,
	RefreshControl,
} from 'react-native'
import ListSchedulesCard from '../../components/CardComponents/ListSchedulesCard'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors.js'
import Sections from '../../services/Sections.js'

export default function SListSchedules({ navigation }) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const [trainers, setTrainers] = useState([]);
	const [selectedTrainer, setSelectedTrainer] = useState('');
	const [selectedSection, setSelectedSection] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [isRefreshing, setIsRefreshing] = useState(false); // State for refreshing

	const fetchSections = async () => {
		try {
			setIsLoading(true);
			const response = await Sections.getAllSections();
			if (response.status === 'success') {
				setData(response.sections_grouped);
				setTrainers(response.trainers);
				setIsLoading(false);
			} else {
				console.log(response.message);
				setIsLoading(false);
			}
		} catch (error) {
			console.error(error);
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
			console.log(trainers);
		}, [])
	);

	return (
		<SafeAreaView style={{ flex: 1, alignItems: 'center', paddingTop: 2 }}>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', zIndex: 1, top: '55%' }}
				/>
			)}
			<HeaderGoBack pageName={'Список секций'} navigation={navigation} />
			<ScrollView
				style={{
					width: '100%',
					marginTop: 2,
					paddingHorizontal: 5,
					height: '98%',
					marginTop: 10,
				}}
				className='w-full mt-2 px-5'
				refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
				}>
				<View style={{ paddingBottom: 7, paddingTop: 4, gap: 10 }}>
					{data.map(section => (
						<View key={section.day} className=''>
							<TextSmallGray text={section.day} />
							<View style={{ gap: 10, marginBottom: 4, marginTop: 2 }}>
								{section.sections.map((schedule, index2) => (
									<ListSchedulesCard
										data={schedule}
										key={index2}
										navigation={navigation}
									/>
								))}
							</View>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
