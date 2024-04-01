import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LabelAndText from '../TextPlace/LabelAndText'
import UserAvatar from './UserAvatar'

export default function ProfileUserCard({ data }) {
	return (
		<View>
			<View className='justify-center items-center gap-3 mt-8'>

				<UserAvatar link={data.avatar} />
				
				<Text className='text-2xl font-semibold text-center'>
					{`${data.last_name} ${data.fist_name}`}
				</Text>
			</View>
			<View className="mt-4" style={{gap:10}}> 
				<LabelAndText label={'Верификация'} text={data.verified ? "Пройдено" : "Не пройдено"} />
				<LabelAndText label={'День рождения'} text={data.birthdate} />
				<LabelAndText label={'Пол'} text={data.gender} />
				<LabelAndText label={'Email'} text={data.email} />
				<LabelAndText label={'Номер телефона'} text={data.phone} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})
