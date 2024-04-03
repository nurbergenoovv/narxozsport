import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LabelAndText from '../TextPlace/LabelAndText'
import UserAvatar from './UserAvatar'

export default function ProfileUserCard({ data }) {
	useEffect(() => {
		console.log(data)
	})
	return (
		<View>
			<View className='justify-center items-center gap-3 mt-8'>
				<UserAvatar link={data.profile_photo} />

				<Text className='text-2xl font-semibold text-center'>
					{`${data.last_name} ${data.first_name}`}
				</Text>
			</View>
			<View className='mt-4' style={{ gap: 10 }}>
				<LabelAndText
					label={'Верификация'}
					text={data.verify ? 'Пройдено' : 'Не пройдено'}
					gap={-4}
				/>
				<LabelAndText label={'День рождения'} text={data.birth_date} gap={-4} />
				<LabelAndText label={'Email'} text={data.email} gap={-4} />
				<LabelAndText
					label={'Номер телефона'}
					text={data.phone_number}
					gap={-4}
				/>
				<LabelAndText
					label={'Тип секций'}
					text={data.type_section ? 'ЛФК' : 'вне ЛФК'}
					gap={-4}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})
