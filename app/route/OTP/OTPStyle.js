import { StyleSheet } from 'react-native'
import colors from '../../const/colors'

const styles = StyleSheet.create({
	topLine:{
		width:'50%',
		height:5,
		backgroundColor:colors.opacityWhiteV2,
        alignItems: 'center',
        justifyContent: 'center',
		borderRadius:2,
		left:'28%',
		position:'absolute',
		top:5
	},
	top:{
		height: '35%',
		backgroundColor:colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: 'top',
		padding: 16,
		gap: 8,
		backgroundColor: colors.opacityWhiteV2,
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		height:'100%'
	},
	firsttext: {
		fontSize: 26,
		marginTop:50,
		fontWeight: '700',
		textAlign:'center',
		textTransform: 'uppercase',
		color: 'black',
	},
	secondtext1: {
		fontSize: 14,
		fontWeight: '500',
		textAlign:'center',
		color: 'black',
	},
	secondtext: {
		marginTop: -5,
		fontSize: 14,
		fontWeight: '500',
		textAlign:'center',
		color: 'black',
	},
	resendAndCancel: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	loginbutton1: {
		backgroundColor: colors.success,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 14,
	},
	cancelButton1: {
		width: '49.2%',
		backgroundColor: colors.primary,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 14,
	},
	resendButton: {
		width: '100%',
		backgroundColor: colors.primary,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 14,
	},
	resendButtonT: {
		width: '100%',
		backgroundColor: colors.primary,
		colors:'white',
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 14,
	},
	resendText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500',
	},
	resendTextT: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500',
	},
	cancelText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500',
	},
	logintext: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500',
	},
	orContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: 'gray',
	},
	orText: {
		marginHorizontal: 10,
		fontSize: 16,
		color: 'white',
	},
	lasttext: {
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '300',
		flexDirection: 'row', // Ensure the text is in a horizontal row
		alignItems: 'baseline', // Align the text elements at their baselines
		justifyContent: 'center', // Center the content horizontally
		marginBottom: 10,
		color: colors.black,
	},

	linkText: {
		fontSize: 14,
		fontWeight: '300',
		color: colors.linkColor,
	},

	otpContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
		marginBottom: 10,
	},
	otpInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: colors.trainerBGColor,
		borderRadius: 10,
		padding: 10,
		textAlign: 'center',
		marginHorizontal: 5,
		fontSize: 20,
		backgroundColor: 'white',
	},
	errorMessage: {
		marginTop: 10,
		alignSelf: 'center',
	},
	errorMessageText: {
		color: 'red',
	},
})

export default styles