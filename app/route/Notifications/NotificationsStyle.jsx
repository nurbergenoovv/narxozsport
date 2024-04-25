import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	scrollContainer:{
		width: '100%',
        paddingHorizontal:20,
		paddingVertical:20,
		height: '98%'
	},
	newsContainer:{
		width: '100%',
        paddingHorizontal:15,
        height: '100%',
        backgroundColor: 'white',
        paddingVertical: 10,
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
		flex:1,
		paddingVertical:'80%',
		justifyContent: 'center',
        alignItems: 'center',
	}

})
export default styles