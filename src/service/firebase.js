import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZP-hhPfXuv2OyE529PAoPTDzBYtrtgGw",
    authDomain: "language-best.firebaseapp.com",
    projectId: "language-best",
    storageBucket: "language-best.appspot.com",
    messagingSenderId: "426145413382",
    appId: "1:426145413382:web:05a22c758ee9b191e28687",
    measurementId: "G-GJ1G54SMYT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(
    { prompt: 'select_account' }
);
export const signInWithGoogle = () => auth.signInWithPopup(provider)
    .then((re) => {
        console.log(re)
    })
    .catch((err) => {
        console.log(err)
    })
export default firebase;