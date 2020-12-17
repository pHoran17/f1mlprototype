import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import ResultsView from '../components/ResultsView';
import NavMenu from '../components/NavMenu';
//Unable to navigate to this screen, intended to show seperate data here
const RaceScreen = () => {

	return(
		<View style={styles.container}>
			<Text style={styles.welcome}>Welcome!</Text>
			<Text style={styles.header}>Last Race Results:</Text>
			<ResultsView style={styles.list}/>
			<NavMenu style={styles.menu}/>
		</View>
	);
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
		flex: 4,
		alignItems:'center'
	},
	list:{
		
	},
	menu:{
		
	}
});


export default RaceScreen;
