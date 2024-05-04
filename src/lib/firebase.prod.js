import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//we need to somehow seed the database

//we need a config here, put your api details here 
const config = {
    apiKey: "AIzaSyD9Z-dR1rrde75L8jJ80IrwcDCnGWAaBeM",
    authDomain: "netflix-48842.firebaseapp.com",
    databaseURL: "https://netflix-48842-default-rtdb.firebaseio.com/",
    projectId: "netflix-48842",
    storageBucket: "netflix-48842.appspot.com",
    messagingSenderId: "95309661701",
    appId: "1:95309661701:web:39fe453d5815c5c31f3e6c",
    measurementId: "G-25DCGVDR12"
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };