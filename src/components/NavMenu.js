import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

//Wierd bug ehere it doesnt recognize the text wrappers for string in buttons, 
const NavMenu = () => {
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
		<View style={styles.layout}>
			<Button style={styles.button} onPress= {() => onPressHome()} title={'Home'}/>
			<Button style={styles.button} onPress= {() => onPressRaces()} title={'Races'}/>
			<Button style={styles.button} onPress= {() => onPressStandings()} title={'Standings'}/>
		</View>
	);
};

const styles = StyleSheet.create({
	layout:{
		flex:1,
		flexDirection: "row",
	},
	button:{
		backgroundColor: '#fc0303',
		color: '#f2e9e9'
	}

});

export default NavMenu;

