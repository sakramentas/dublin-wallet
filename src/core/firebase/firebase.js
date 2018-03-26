import firebase from 'firebase';
import { firebaseConfig } from './config';

require('firebase/firestore');

export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.firestore();

