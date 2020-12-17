import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/screens/Index';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import RaceScreen from './src/screens/RaceScreen';
import StandingScreen from './src/screens/StandingScreen';
import {firebase} from './src/firebase/config';
import { NavigationContainer } from '@react-navigation/native';

//Authentication code disabled for testing navigation
/*export default function App() {
  const [load, setLoad] = useState(true)
  const [user,setUser] = useState(null)
  
  return (
		<NavigationContainer>
			<navigator.Navigator>
				{user ? (
					<navigator.Screen name ="Home">
					{props => <HomeScreen{...props} extraData={user}/>}
					</navigator.Screen>
				
				) : (
					<>
						<navigator.Screen name = "Login" component ={LoginScreen}/>
						<navigator.Screen name = "Register" component ={RegisterScreen}/>
					</>
				)}
			</navigator.Navigator>
		</NavigationContainer>
  );
}*/


//Navigator for enabling which screens can be rendered
const navigator = createStackNavigator({
	Index: Index,
	Login: LoginScreen,
	Register: RegisterScreen,
	Home: HomeScreen,
	Race: RaceScreen,
	Standings: StandingScreen

}, {
	initialRouteName: 'Index',
	defaultNavigationOptions:{
		title: 'F1 Machine Learning Prototype'
	}
});

export default createAppContainer(navigator);