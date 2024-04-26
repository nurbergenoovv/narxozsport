import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'

const Dropdown = ({ options, onSelect, sOption }) => {
	const [isVisible, setIsVisible] = useState(false)
	const [selectedOption, setSelectedOption] = useState(sOption)

	const toggleModal = () => {
		setIsVisible(!isVisible)
	}

	const handleSelectOption = option => {
		setSelectedOption(option)
		onSelect(option)
		toggleModal()
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={toggleModal}>
				<Text className='text-sm font-semibold'>{selectedOption}</Text>
				<MaterialCommunityIcons
					name={'chevron-right'}
					size={24}
					color={colors.primary}
					style={styles.pencil}
				/>
			</TouchableOpacity>
			<Modal
				visible={isVisible}
				transparent={true}
				animationType='fade'
				onRequestClose={toggleModal}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						{options.map((option, index) => (
							<TouchableOpacity
								key={index}
								style={styles.option}
								onPress={() => handleSelectOption(option)}
							>
								<Text className='text-lg font-semibold text-center'>
									{option}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		// backgroundColor:'red'
	},
	button: {
		width: '100%',
		paddingHorizontal: 15,
		backgroundColor: 'white',
		paddingVertical: 25,
		paddingBottom: 25,
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
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: 'white',
		margin: 50,
		padding: 20,
		borderRadius: 10,
		elevation: 5,
		gap: 5,
	},
	option: {
		paddingVertical: 10,
		backgroundColor: colors.opacityWhiteV2,
		borderRadius: 8,
	},
})

export default Dropdown
