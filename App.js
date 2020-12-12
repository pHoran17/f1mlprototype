import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/screens/Index';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
//import { NavigationContainer } from '@react-navigation/native';

/*export default function App() {
  const [load, setLoad] = useState(true)
  const [user,setUser] = useState(null)
  
  return (
	
  );
}
*/


const navigator = createStackNavigator({
	Index: Index,
	Login: LoginScreen,
	Register: RegisterScreen,
	Home: HomeScreen

}, {
	initialRouteName: 'Index',
	defaultNavigationOptions:{
		title: 'F1 Machine Learning Prototype'
	}
});

export default createAppContainer(navigator);