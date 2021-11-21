// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import '@firebase/messaging';
// import { getMessaging, getToken, } from "firebase/messaging";
// const firebaseConfig = {
//     apiKey: "AIzaSyCZP-hhPfXuv2OyE529PAoPTDzBYtrtgGw",
//     authDomain: "language-best.firebaseapp.com",
//     projectId: "language-best",
//     storageBucket: "language-best.appspot.com",
//     messagingSenderId: "426145413382",
//     appId: "1:426145413382:web:05a22c758ee9b191e28687",
//     measurementId: "G-GJ1G54SMYT"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // const msg = firebase.messaging();
// export const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters(
//     { prompt: 'select_account' }
// );
// export const signInWithGoogle = () => auth.signInWithPopup(provider)
//     .then((re) => {
//         console.log(re)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// export default firebase;
// // const messaging = getMessaging();
// // getToken(messaging, { vapidKey: 'BMt5m5gheH4yUnb-Hz0cT38Io-19cfWwVdFJVyk-HbPeYemY_GMHKH0tSwdHezTvTb4KYTDUQTaK89p5GKnf-lM' }).then((currentToken) => {
// //     if (currentToken) {
// //         console.log("sdfsdf")
// //         // Send the token to your server and update the UI if necessary
// //         // ...
// //     } else {
// //         // Show permission request UI
// //         console.log('No registration token available. Request permission to generate one.');
// //         // ...
// //     }
// // }).catch((err) => {
// //     console.log('An error occurred while retrieving token. ', err);
// //     // ...
// // });


// // const messaging = getMessaging();
// // messaging.getToken({ vapidKey: "BMt5m5gheH4yUnb-Hz0cT38Io-19cfWwVdFJVyk-HbPeYemY_GMHKH0tSwdHezTvTb4KYTDUQTaK89p5GKnf-lM" });
// // const messaging = firebase.messaging();
// // messaging.requestPermission()
// //     .then(function () {
// //         console.log('havr permision');
// //         return messaging.getToken();
// //     })
// //     .then(function (token) {
// //         console.log(token);
// //     })
// //     .catch(function (err) {
// //         console.log("errordf");
// //     })