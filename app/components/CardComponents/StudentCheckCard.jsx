import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from '../../const/colors'
import Sections from '../../services/Sections'
import TextSmallGray from '../TextPlace/TextSmallGray'
import UserAvatar from './UserAvatar'

export default function StudentCheckCard({ studentt, setIsLoading }) {

	const [student, setStudent] = useState(studentt)

	const fetchChangeStatus = async status => {
		try {
			setIsLoading(true)
			const response = await Sections.changeStatus(status, student.visit_id)
			setIsLoading(false)
			if (response.status ==='success') {
				setStudent(prevState =>({...prevState, visit:status}))
            }
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<View>
			<View
				className='p-2 rounded-t-lg flex-row items-center'
				key={student.id}
				style={{
					backgroundColor: colors.trainerBGColor,
				}}
			>
				<View className='flex-row items-center' style={{ gap: 10, paddingHorizontal:10 }}>
					<UserAvatar
						width={55}
						height={55}
						link={student.profile_photo}
						borderWidth={1.5}
						padding={1.5}
					/>
					<View
						className='justify-between'
						style={{
							gap: -5,
						}}
					>
						<Text className='text-lg'>
							{`${student.last_name} ${student.first_name}`}
						</Text>
						<TextSmallGray text={student.email} />
						<TextSmallGray text={`Кол-во посещений: ${student.visits}`} />
						<TextSmallGray
							text={`Статус: ${
								student.visit == null
									? 'Оценка не ставлен'
									: student.visit == 0
									? 'Не было'
									: 'Было'
							}`}
						/>
					</View>
				</View>
			</View>
			<View
				className='flex-row w-full justify-center px-5 py-2 rounded-b-lg pb-4'
				style={{ backgroundColor: colors.trainerBGColor, gap: 10 }}
			>
				<TouchableOpacity className='p-2 bg-green-500 w-[49%] rounded-md' onPress={()=>{
					fetchChangeStatus("1")
				}}>
					<Text className='text-center font-semibold text-white'>Было</Text>
				</TouchableOpacity>
				<TouchableOpacity className='p-2 bg-red-500 w-[49%] rounded-md' onPress={()=>{
					fetchChangeStatus("0")
				}}>
					<Text className='text-center font-semibold text-white'>Не было</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
