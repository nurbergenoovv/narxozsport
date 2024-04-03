import React, { useRef, useState } from 'react'
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../const/colors'

const DropDown2 = ({ label, data, onSelect }) => {
	const DropdownButton = useRef()
	const [visible, setVisible] = useState(false)
	const [selected, setSelected] = useState(undefined)
	const [dropdownTop, setDropdownTop] = useState(0)

	const toggleDropdown = () => {
		visible ? setVisible(false) : openDropdown()
	}

	const openDropdown = () => {
		DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
			setDropdownTop(py + h)
		})
		setVisible(true)
	}

	const onItemPress = item => {
		setSelected(item)
		onSelect(item)
		setVisible(false)
	}

	const renderItem = ({ item }) => (
		<TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
			<Text>{item.label}</Text>
		</TouchableOpacity>
	)

	const renderDropdown = () => {
		return (
			<Modal visible={visible} transparent animationType='none'>
				<TouchableOpacity
					style={styles.overlay}
					onPress={() => setVisible(false)}
				>
					<View style={[styles.dropdown, { top: dropdownTop }]}>
						<FlatList
							data={data}
							renderItem={renderItem}
							keyExtractor={(item, index) => index.toString()}
						/>
					</View>
				</TouchableOpacity>
			</Modal>
		)
	}

	return (
		<TouchableOpacity
			ref={DropdownButton}
			style={styles.button}
			onPress={toggleDropdown}
		>
			{renderDropdown()}
			<Text style={styles.buttonText}>
				{(selected && selected.label) || label}
			</Text>
			<MaterialCommunityIcons
				name={'chevron-down'}
				size={24}
				color={colors.primary}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.trainerBGColor,
		height: 50,
		zIndex: 1,
    borderRadius:12
	},
	buttonText: {
		flex: 1,
    paddingHorizontal:20
	},
	icon: {
		marginRight: 10,
	},
	dropdown: {
		position: 'absolute',
		width: '100%',
		paddingHorizontal: 20,
	},
	overlay: {
		width: '100%',
		height: '100%',
	},
	item: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomWidth: 1,
		backgroundColor: colors.white,
	},
})

export default DropDown2

// const [selected, setSelected] = useState(undefined);
//   const data = [
//     { label: 'One', value: '1' },
//     { label: 'Two', value: '2' },
//     { label: 'Three', value: '3' },
//     { label: 'Four', value: '4' },
//     { label: 'Five', value: '5' },
//   ];

// <Dropdown label="Select Item" data={data} onSelect={setSelected} />
