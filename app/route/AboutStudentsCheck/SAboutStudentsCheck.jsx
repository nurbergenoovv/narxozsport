import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import {
	ActivityIndicator,
	Alert,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from 'react-native'
import StudentCheckCard from '../../components/CardComponents/StudentCheckCard.jsx'
import HeaderGoBack from '../../components/Header/HeaderGoBack'
import TextSmallGray from '../../components/TextPlace/TextSmallGray'
import colors from '../../const/colors.js'
import Sections from '../../services/Sections.js'

export default function SAboutStudentsCheck({ navigation, route }) {
	const { Dataq } = route.params
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState({
		section_name: { name: undefined },
		date_name:undefined,
		start: undefined,
		end: undefined,
    })
	const [students, setStudents] = useState([])

	useFocusEffect(
		useCallback(() => {
			setData(Dataq)
			async function fetch() {
				try {
					setIsLoading(true)
					const response = await Sections.getStudentList(
						Dataq.section_name.id,
						Dataq.section_id
					)
					console.log(response)
					setIsLoading(false)
					if (response.status === 'success') {
						setStudents(response.students)
					} else {
						Alert.alert('Ошибка', response.message)
					}
				} catch (e) {
					console.error(e)
				}
			}
			fetch()
			if (students.length == 0) {
			fetch()
			}
		}, [navigation])
	)

	return (
		<SafeAreaView className='flex-1 items-center pt-2'>
			{isLoading && (
				<ActivityIndicator
					size='large'
					color={colors.primary}
					style={{ position: 'absolute', zIndex: 1, top: '55%' }}
				/>
			)}
			<HeaderGoBack pageName={`Список студентов`} navigation={navigation} />
			<ScrollView className='w-full mt-2 px-5' style={{ height: '98%' }}>
				<View className='pb-7 pt-4'>
					<Text
						className='
						text-2xl font-semibold 
					'
					>
						{data.section_name.name}
					</Text>
					<Text
						className='
						text-[16px] font-semibold
					'
						style={{ color: colors.primary }}
					>
						{`${data.date_name} ${data.start} - ${data.end}`}
					</Text>
					<View className='mt-2'>
						<TextSmallGray text={'Список студентов'} />
						<Text className='text-xs text-gray-500'>
							{`Кол-во студентов: ${students.length}`}
						</Text>
						<View className='w-full bg-gray py-3' style={{ gap: 10 }}>
							{students.length > 0 ? (
								students.map((student, index) => (
									<StudentCheckCard
										studentt={student}
										key={student.id}
										setIsLoading={setIsLoading}
									/>
								))
							) : (
								<TextSmallGray text={'Список студентов не найдено'} />
							)}
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
