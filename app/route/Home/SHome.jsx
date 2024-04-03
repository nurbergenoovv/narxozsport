import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NewsCard from '../../components/CardComponents/NewsCard'
import HeaderHomeScreen from '../../components/Header/HeaderHomeScreen'
import colors from '../../const/colors'
import styles from './HomeStyle'

export default function SHome({ navigation }) {
	const [list, setList] = useState([
		{
			id:1,
			title:"You have first notify",
			description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam."
		},
		// {
		// 	id:2,
		// 	title:"You have second notify",
		// 	description:"Lorem ipsum dolor sit amet, consectetur adipisicing"
		// }
	])
	const [news, setNews] = useState([
		{
			id: 1,
			title: 'Новость 1',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia praesentium quis facere magni reprehenderit, consequuntur vel veritatis saepe excepturi molestiae architecto fugiat ratione dignissimos dolorem impedit animi eius, qui commo',
		},
		{
			id: 2,
			title: 'Новость 2',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia praesentium quis facere magni reprehenderit, consequuntur vel veritatis saepe excepturi molestiae architecto fugiat ratione dignissimos dolorem impedit animi eius, qui commo',
		},
		{
			id: 3,
			title: 'Новость 3',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia praesentium quis facere magni reprehenderit, consequuntur vel veritatis saepe excepturi molestiae architecto fugiat ratione dignissimos dolorem impedit animi eius, qui commo',
		},
		{
			id: 4,
			title: 'Новость 4',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia praesentium quis facere magni reprehenderit, consequuntur vel veritatis saepe excepturi molestiae architecto fugiat ratione dignissimos dolorem impedit animi eius, qui commo',
		},
		{
			id: 5,
			title: 'Новость 5',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia praesentium quis facere magni reprehenderit, consequuntur vel veritatis saepe excepturi molestiae architecto fugiat ratione dignissimos dolorem impedit animi eius, qui commo',
		},
	])
	return (
		<SafeAreaView>
			<HeaderHomeScreen navigation={navigation} list={list} />
			<ScrollView style={styles.scrollContainer}>
				{news.length > 0 ? (
					<View className='bg-white' style={styles.newsContainer}>
						{news.map(newsItem => (
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
	)
}
