import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
};

// console.log("NODE_ENV",process.env.NODE_ENV) 
// console.log("API_KEY",process.env.APP_KEY)
// console.log(config);
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
//    expenses.push({
// 		 id: childSnapshot.key,
// 		 ...childSnapshot.val()
// 	 });
// 	});

// 	console.log(expenses);
// });


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
//    expenses.push({
// 		 id: childSnapshot.key,
// 		 ...childSnapshot.val()
// 	 });
// 	});

// 	console.log(expenses);
// });




// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 1200,
//   createdAt: 976123498763
// });



// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })




// firebase.database().ref().set({
// 	name:' Bogodar Shm',
// 	age: '31',
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software engineer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Philadelphia',
// 		country: 'United States'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) =>{
// 	console.log('This is failed', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });


// database.ref('isSingle')
// .remove()
// .then(() =>{
// 	console.log('Data was removed')
// }).catch((e) => {
// console.log('Did notremove data', e)
// });
