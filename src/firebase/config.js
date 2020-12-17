import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDP2UD1NeuIcUOW0hVng2J9vdkRUuaRigM',
	authDomain: 'f1mlprototype.firebaseapp.com',
	projectId: 'f1mlprototype',
	storageBucket: 'f1mlprototype.appspot.com' ,
	messagingSenderId: '240091129835',
	appId: '1:240091129835:android:e9e135b567865f23a31bae',
	measurementId: "G-32CFNTX5EC"
};

if (!firebase.apps.length){
	firebase.initializeApp(firebaseConfig)
}

export {firebase};