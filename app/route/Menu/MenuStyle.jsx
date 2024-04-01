import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	WhiteContainer:{
		width: '100%',
        paddingHorizontal:20,
        backgroundColor: 'white',
        paddingVertical: 27,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        gap:10,
	},
	container:{
		width: '100%',
		paddingHorizontal:20
	}
})
export default styles