import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBzkzpfGQndgWtEPnnSHww2JGGbjWteUAE',
	authDomain: 'quick-docs-b6417.firebaseapp.com',
	projectId: 'quick-docs-b6417',
	storageBucket: 'quick-docs-b6417.appspot.com',
	messagingSenderId: '280405190155',
	appId: '1:280405190155:web:72bcb6e68454b28d1b090e',
};

// const app = (firebase.app.length != 1) ? firebase.initializeApp(firebaseConfig) : firebase.app();

// console.log(firebase.app.length);

let app = {};

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else app = firebase.app();

const db = app.firestore();

export { db };
