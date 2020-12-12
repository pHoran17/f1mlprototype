import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const RegisterScreen = () => {
	const [email, setEmail] = useState('')
	const [password,setPassword] = useState('')
	
	const onRegisterPress = () => {
	
	}

	return(
		<View style={styles.container}>
			<Text>Email: </Text>
			<TextInput 
			style={styles.input}
			placeholder ={'E-mail'}
			placeholderTextColor=""
			onChangeText = {(text) => setEmail(text)}
			value = {email}
			underlineColorAndroid = "transparent"
			autoCapitalize = "none"
			/>
			<Text>Password: </Text>
			<TextInput 
			style={styles.input}
			placeholder ={'Password'}
			placeholderTextColor=""
			onChangeText = {(text) => setPassword(text)}
			value = {password}
			underlineColorAndroid = "transparent"
			autoCapitalize = "none"/>
			<TouchableOpacity style={styles.button}>
				<Text>Register</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center'
	},
	input:{
		borderRadius: 5,
		backgroundColor: '#c4b5b5',
		margin: 20,
		padding: 10,
		paddingLeft: 20,
		height: 40,
		width: 250
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


export default RegisterScreen;