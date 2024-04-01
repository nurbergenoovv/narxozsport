import { StyleSheet } from 'react-native'
import colors from '../../../const/colors'

const styles = StyleSheet.create({
	main:{
		flex: 1,
        backgroundColor: colors.primary,
	},
	container:{
		width: '100%',
		padding:20,
		paddingVertical:50,
		gap:40,
	}
})

export default styles