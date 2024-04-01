import { StyleSheet } from 'react-native'
import colors from '../../../const/colors'

const styles = StyleSheet.create({
	main:{
		flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
	},
	container:{
		width: '100%',
		padding:20,
		gap:40,
	}
})

export default styles