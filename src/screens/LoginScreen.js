import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const LoginScreen = ({navigation}) => {

	const [email, setEmail] = useState('')
	const [password,setPassword] = useState('')

	const onFootLinkPress = () => {
		navigation.navigate("Register")
	}
	const onLoginPress = () => {
	
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
				autoCapitalize = "none"
			/>
			<TouchableOpacity 
			style={styles.button}
			onPress={onLoginPress}>
				<Text>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={styles.footSection}>
					<Text style={styles.footText}>
						Don't have an account?
					</Text>
					<Text style={styles.footLink} 
						onPress={onFootLinkPress}>
							Register here!
					</Text>
				</View>
			</TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		alignItems:'center',
		flex: 1,
	},
	fieldHeader:{
		fontSize: 20,
		color:"#c4b5b5",
		fontWeight: "bold"
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
	footSection:{
		alignItems:'center',
		flex:1,
		marginTop:10
	},
	footText:{
		color: '#c4b5b5',
		fontSize: 20
	},
	footLink:{
		fontSize: 20,
		fontWeight: 'bold',
		color: '#3949f7'
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


export default LoginScreen;

