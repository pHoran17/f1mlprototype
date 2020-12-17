import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import ResultsView from '../components/ResultsView';
import NavMenu from '../components/NavMenu';
//import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import TabMenu from '../components/TabMenu';
//Develop ResultsView + add placeholder data

//Cant seem to display anything other than list right now

const HomeScreen = () => {

	const onHomePress = () => {
		navigation.navigate('Home')
	}
	const onRacesPress = () => {
		navigation.navigate('Races')
	}
	const onStandingsPress = () => {
		navigation.navigate('Standings')
	}
	return(
		<View style={styles.container}>
			<Text style={styles.welcome}>Welcome!</Text>
			<Text style={styles.header}>Last Race Results:</Text>
			<ResultsView style={styles.list}/>
		</View>
		)
	return(
		<View style={style.menuContainer}>
			<Button title="Races" onPress={() => onRacePress()}/>
			<Button title="Races" onPress={() => onStandingsPress()}/>
		</View>
	)
		
};

const styles = StyleSheet.create({
	welcome:{
		fontSize:30,
		color: 'black'
	},
	header:{
		fontSize: 22,
		fontWeight: "bold"
	},
	container:{
		flex: 2,
		alignItems:'center'
	},
	list:{
		
	},
	menuContainer:{
		flex: 1,
		flexDirection:'column'
	}
});


export default HomeScreen;
