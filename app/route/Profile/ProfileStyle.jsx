import { StyleSheet } from 'react-native'
import colors from '../../const/colors'

const styles = StyleSheet.create({
	WhiteContainer:{
		width: '100%',
        paddingHorizontal:20,
        backgroundColor: 'white',
        paddingVertical: 15,
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
        gap:5,
	},
	container:{
		width: '100%',
        display:'flex',
        flexDirection:'column',
	},
    container2:{
		width: '100%',
		paddingHorizontal:20,
        display:'flex',
        flexDirection:'column',
        rowGap:10
	},
    pencil:{
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 1000,
        color: colors.primary,
        fontSize: 30,
    }
})
export default styles