import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Index = ({navigation}) => {
	//Add styling for buttons, use em for navigation, add state functionality
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Login')}
			>
				<Text>
					Login
				</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				style={styles.button}
				onPress={() => navigation.navigate('Register')}
			>
				<Text>
					Register
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center'
	},
	button:{
		marginTop: 25,
		height: 40,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fc0303',
		padding: 20,
		color: '#f2e9e9'
	}
});


export default Index;
