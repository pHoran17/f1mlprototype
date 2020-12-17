import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RaceScreen from './src/screens/RaceScreen';
import StandingScreen from './src/screens/StandingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Attempt at tab menu for bottom of screens when logged in, requires redesign to implement


/*function HomeScreen(){
	return(
		<View style={styles.tab}>
			<Text>Home</Text>
		</View>
	);
}
function RaceScreen(){
	return(
		<View style={styles.tab}>
			<Text>Races</Text>
		</View>
	);
}
function StandingScreen(){
	return(
		<View style={styles.tab}>
			<Text>Standings</Text>
		</View>
	);
}
*/
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
	tab:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default function TabMenu(){
	return(
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen}/>
				<Tab.Screen name="Races" component={RaceScreen}/>
				<Tab.Screen name="Standings" component={StandingScreen}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
