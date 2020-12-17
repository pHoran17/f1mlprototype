import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
//Component that displays placeholder results, will be changed to data from backend in full version

const ResultsView = () => {
	//Placeholder json data to represent what will be displayed on screens
	const results = [
		{id: 0, pos: 1, name: "Lewis Hamilton", points: 26},
		{id: 1, pos: 2, name: "Max Verstappen", points: 18},
		{id: 2, pos: 3, name: "Valtieri Bottas", points: 15},
		{id: 3, pos: 4, name: "Alex Albon", points: 12},
		{id: 4, pos: 5, name: "Carlos Sainz", points: 10},
		{id: 5, pos: 6, name: "Sergio Perez", points: 8},
		{id: 6, pos: 7, name: "Pierre Gasly", points: 6},
		{id: 7, pos: 8, name: "Kevin Magnussen", points: 4},
		{id: 8, pos: 9, name: "Lando Norris", points: 2},
		{id: 9, pos: 10, name: "George Russell", points: 1}
	]
	
	return(
		<View>
			<FlatList
				style={styles.list}
				data = {results}
				renderItem={({item}) => {
					return (
						<View>
							<Text style={styles.item}>{item.pos} {item.name} {item.points}</Text>
						</View>
					)
				}}
			
			/>

		</View>
	);
};

const styles = StyleSheet.create({
	list:{
		flexDirection: 'row',
		flex: 2
		
	},
	item:{
		fontSize: 16,
		padding: 1,
		alignSelf: "stretch",
		backgroundColor: '#fc0303',
		borderRadius: 5
	}

});

export default ResultsView;
