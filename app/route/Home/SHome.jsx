import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { ScrollView, Text, View, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NewsCard from '../../components/CardComponents/NewsCard'
import HeaderHomeScreen from '../../components/Header/HeaderHomeScreen'
import colors from '../../const/colors'
import News from '../../services/News'
import styles from './HomeStyle'

export default function SHome({ navigation }) {
	const [list, setList] = useState([
		{
			id: 1,
			title: 'You have first notify',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.',
		},
	]);

	const [news, setNews] = useState([]);
	const [notifications, setNotifications] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [count_not_viewed, setCount_not_viewed] = useState(0);
	const [isRefreshing, setIsRefreshing] = useState(false); // State for refreshing

	const getNews = async () => {
		const response = await News.getAllNews();
		if (response.status === 'success') {
			setNews(response.news);
			setNotifications(response.notifications);
			setCount_not_viewed(response.count_not_viewed);
		}
	};

	const onRefresh = () => {
		setIsRefreshing(true); // Set refreshing state to true
		getNews(); // Fetch news data
		setIsRefreshing(false); // Set refreshing state back to false when done
	};

	useFocusEffect(
		useCallback(() => {
			getNews();
		}, [navigation])
	);

	return (
		<SafeAreaView>
			<HeaderHomeScreen
				navigation={navigation}
				list={notifications}
				count_not_viewed={count_not_viewed}
			/>
			<ScrollView
				style={styles.scrollContainer}
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={onRefresh}
						colors={[colors.primary]} // Color of the refresh indicator
					/>
				}>
				{news.length > 0 ? (
					<View className='bg-white' style={styles.newsContainer}>
						{news.map((newsItem) => (
							<NewsCard newsItem={newsItem} key={newsItem.id} />
						))}
					</View>
				) : (
					<View style={styles.container}>
						<MaterialCommunityIcons
							name='bullhorn'
							size={72}
							color={colors.opacityGray}
						/>
						<Text style={{ color: colors.opacityGray }}>Не найдено</Text>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}
