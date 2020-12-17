import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {firebase} from '../firebase/config';

//Code below for rendering LoginScreen, handling authentication and handling styling
const LoginScreen = ({navigation}) => {
	//Declaring required state variables
	const [email, setEmail] = useState('')
	const [password,setPassword] = useState('')

	const onFootLinkPress = () => {
		navigation.navigate("Register")
	}
	//Authentication code disabled for testing navigation, was unable to find firebase store
	/*const onLoginPress = () => {
		firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
			const userid = response.user.uid
			const usersRef = firebase.firestore().collection('users')
			usersRef.doc(userid).get().then(firestoreDocument => {
				if(!firestoreDocument.exists){
					alert("User does not exist.")
					return;
				}
				const user = firestoreDocument.data()
				navigation.navigate('Home', {user})
			})
			.catch(err => {
				alert(err)
			});
		})
	}
	*/
	const onLoginPress = () => {
		navigation.navigate('Home')
	}
	//Screen renders here
	//Inputs are Email and password
	return(
		<View style={styles.container}>
			<Text>Email: </Text>
			<TextInput 
				style={styles.input}
				placeholder ={'E-mail'}
				placeholderTextColor='#080807'
				onChangeText = {(text) => setEmail(text)}
				value = {email}
				underlineColorAndroid = "transparent"
				autoCapitalize = "none"
			/>
			<Text>Password: </Text>
			<TextInput 
				style={styles.input}
				placeholder ={'Password'}
				secureTextEntry={true}
				placeholderTextColor='#080807'
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
		color:'#c4b5b5',
		fontWeight: "bold"
	},
	input:{
		borderRadius: 5,
		backgroundColor: '#c4b5b5',
		marginTop: 20,
		marginLeft: 25,
		marginRight: 25,
		marginBottom: 20,
		padding: 10,
		paddingLeft: 20,
		height: 40,
		width: 250,
		overflow:'hidden'
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

