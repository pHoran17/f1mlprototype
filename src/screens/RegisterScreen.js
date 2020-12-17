import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {firebase} from '../firebase/config';

const RegisterScreen = () => {
	const [email, setEmail] = useState('')
	const [fullName, setFullName] = useState('')
	const [password,setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	
	const onRegisterPress = () => {
		if(password != confirmPassword){
			alert("Passwords are not the same, Please reinsert password")
			return
		}
		firebase.auth().createUserWithEmailAndPassword(email,password).then((response) => {
			const userid = response.user.userid; 
			const data = {
				id: userid,
				email,
				fullName,
			};
			const usersReference = firebase.firestore().collection('users')
			usersReference.doc(uid).set(data).then(() => {
				navigation.navigate('Home',{user:data})
			})
			.catch((err) => {
				alert(err)
			});
		}) 
	}

	return(
		<View style={styles.container}>
			<TextInput 
			style={styles.input}
			placeholder ={'Full Name'}
			placeholderTextColor='#080807'
			onChangeText = {(text) => setFullName(text)}
			value = {fullName}
			underlineColorAndroid = "transparent"
			autoCapitalize = "none"
			/>
			<TextInput 
			style={styles.input}
			placeholder ={'E-mail'}
			placeholderTextColor='#080807'
			onChangeText = {(text) => setEmail(text)}
			value = {email}
			underlineColorAndroid = "transparent"
			autoCapitalize = "none"
			/>
			<TextInput 
			style={styles.input}
			placeholder ={'Password'}
			secureTextEntry={true}
			placeholderTextColor='#080807'
			onChangeText = {(text) => setPassword(text)}
			value = {password}
			underlineColorAndroid = "transparent"
			autoCapitalize = "none"/>
			<TextInput 
			style={styles.input}
			placeholder ={'Confirm Password'}
			secureTextEntry={true}
			placeholderTextColor='#080807'
			onChangeText = {(text) => setConfirmPassword(text)}
			value = {confirmPassword}
			underlineColorAndroid = "transparent"
			autoCapitalize = "none"
			/>
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