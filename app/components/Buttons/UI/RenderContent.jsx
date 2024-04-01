import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../const/colors'
import TextMedium from '../../TextPlace/TextMedium'
import TextSmallGray from '../../TextPlace/TextSmallGray'

export default function renderContent(section, _, isActive) {
	return (
		<View style={styles.container}>
			{section.sections.length > 0 && (
				<View style={{ width: '100%' }}>
					{section.sections.map((item, index) => (
						<View key={index} className="mt-5">
							<Text
								style={{ color: colors.primary }}
								className='text-lg font-semibold'
							>
								{item.title}
							</Text>
							<View style={{ marginTop: 8, gap: 8 }} >
								{item.sections.map((item2, index) => (
									<View
										key={index}
										className=''
										style={{
											gap: 5,
											paddingBottom: 8,
											borderBottomColor: colors.opacityGray,
											borderBottomWidth: 1,
										}}
									>
										<TextSmallGray text={item2.title} />
										<TextMedium text={item2.content} />
									</View>
								))}
							</View>
						</View>
					))}
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	accordBody: {
		padding: 12,
	},
	container: {
		width: '100%',
		paddingHorizontal: 15,
		backgroundColor: 'white',
		paddingBottom: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		gap: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})
