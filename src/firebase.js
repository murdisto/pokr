import firebase from 'firebase/app'; // firebase v8.0.0 breatking change https://stackoverflow.com/a/64545863/11128005
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

const usersCollection = db.collection('users');


export { 
  db,
  auth,
  usersCollection
};