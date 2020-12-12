import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDP2UD1NeuIcUOW0hVng2J9vdkRUuaRigM',
	authDomain: ,
	projectId: 'f1mlprototype',
	storageBucket: 'f1mlprototype.appspot.com' ,
	messagingSenderId: '',
	appId: '1:240091129835:android:e9e135b567865f23a31bae'
};

if (!firebase.apps.length){
	fireabse.initializeApp(firebaseConfig)
}

export {firebase};