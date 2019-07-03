import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN, 
    databaseURL: process.env.DATA_BASE_URL, 
    projectId: process.env.PROJECT_ID, 
    storageBucket: process.env.STORAGE_BUCKET, 
    messagingSenderId: process.env.MESSAGING_SENDER_ID, 
    appId: process.env.APP_ID,
};

firebase.initializeApp(config);

export const { auth } = firebase;
export const provider = new firebase.auth.FacebookAuthProvider();