import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const HomeScreen = () => {

	return(
		<View style={styles.container}>
			<Text style={styles.welcome}>Welcome!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	welcome:{
		fontSize:30,
		color: 'black'
	},
	container:{
		alignItems:'center',
		flex: 1,
	}
});


export default HomeScreen;
