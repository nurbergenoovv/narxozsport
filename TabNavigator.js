import {
	BottomTabBar,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from './app/const/colors'
import SHome from './app/route/Home/SHome'
import SMenu from './app/route/Menu/SMenu'
import SProfile from './app/route/Profile/SProfile'

const Tab = createBottomTabNavigator()

const TabBar = props => (
	<BottomTabBar
		{...props}
		style={{
			backgroundColor: '#fff',
		}}
	/>
)

const TabNavigator = ({}) => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: { backgroundColor: '#fff' },
				headerShown: false,
				tabBarShowLabel: false,
			}}
			tabBar={props => <TabBar {...props} />}
		>
			<Tab.Screen
				name='Home'
				component={SHome}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='home-outline'
							size={28}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Menu'
				component={SMenu}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='view-grid-outline'
							size={28}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={SProfile}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='account-circle-outline'
							size={28}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}
export default TabNavigator
