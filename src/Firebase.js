import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/messaging';
import axios from 'axios';
import { getMessaging, getToken } from "firebase/messaging";
import { v4 as uuidv4 } from 'uuid';
const firebaseConfig = {
    apiKey: "AIzaSyCZP-hhPfXuv2OyE529PAoPTDzBYtrtgGw",
    authDomain: "language-best.firebaseapp.com",
    projectId: "language-best",
    storageBucket: "language-best.appspot.com",
    messagingSenderId: "426145413382",
    appId: "1:426145413382:web:05a22c758ee9b191e28687",
    measurementId: "G-GJ1G54SMYT"
};

firebase.initializeApp(firebaseConfig);
console.log("dsjnflkjsd");
const id = (localStorage.getItem('id')) ? localStorage.getItem('id') : uuidv4();
localStorage.setItem('id', id);

const messaging = getMessaging();
getToken(messaging, { vapidKey: "BMt5m5gheH4yUnb-Hz0cT38Io-19cfWwVdFJVyk-HbPeYemY_GMHKH0tSwdHezTvTb4KYTDUQTaK89p5GKnf-lM" }).then((currentToken) => {
    if (currentToken) {
        console.log(currentToken);
        // Send the token to your server and update the UI if necessary
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);

});

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(
    { prompt: 'select_account' }
);
export const signInWithGoogle = () => auth.signInWithPopup(provider)
    .then((re) => {
        console.log(re)
        const data =
        {
            "accessToken": re.user._delegate.accessToken
        }
        console.log(data)

        axios.post('https://api-staging.languagebest.com/api/Authentication/login/google', data)
            .then(response => {
                console.log(response)
                if (response.data.isResultExist === true) {
                    localStorage.setItem('userToken', response.data.result.token);
                    console.log(response)
                }
            }
            )
            .catch(error => {

                console.log("errorrrrrrrrrrrr");
                console.log(error);
                alert(error);
            })
    })
    .catch((err) => {
        console.log(err)
    })

export default firebase;
// const messaging = getMessaging();
// getToken(messaging, { vapidKey: 'BMt5m5gheH4yUnb-Hz0cT38Io-19cfWwVdFJVyk-HbPeYemY_GMHKH0tSwdHezTvTb4KYTDUQTaK89p5GKnf-lM' }).then((currentToken) => {
//     if (currentToken) {
//         console.log("sdfsdf")
//         // Send the token to your server and update the UI if necessary
//         // ...
//     } else {
//         // Show permission request UI
//         console.log('No registration token available. Request permission to generate one.');
//         // ...
//     }
// }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // ...
// });


// const messaging = getMessaging();
// messaging.getToken({ vapidKey: "BMt5m5gheH4yUnb-Hz0cT38Io-19cfWwVdFJVyk-HbPeYemY_GMHKH0tSwdHezTvTb4KYTDUQTaK89p5GKnf-lM" });
// const messaging = firebase.messaging();
// messaging.requestPermission()
//     .then(function () {
//         console.log('havr permision');
//         return messaging.getToken();
//     })
//     .then(function (token) {
//         console.log(token);
//     })
//     .catch(function (err) {
//         console.log("errordf");
//     })


// const messaging = firebase.messaging();
// messaging.requestPermission()
//     .then(function () {
//         console.log('have permision');
//         return messaging.getToken();
//     })
//     .then(function (token) {
//         console.log(token);
//     })
//     .catch(function (err) {
//         console.log("errordf");
//     })