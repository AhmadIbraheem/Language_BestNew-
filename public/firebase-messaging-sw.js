import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCZP-hhPfXuv2OyE529PAoPTDzBYtrtgGw",
    authDomain: "language-best.firebaseapp.com",
    projectId: "language-best",
    storageBucket: "language-best.appspot.com",
    messagingSenderId: "426145413382",
    appId: "1:426145413382:web:05a22c758ee9b191e28687",
    measurementId: "G-GJ1G54SMYT"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
// onMessage(messaging, (payload) => {
//     console.log('Message received. ', payload);
//     // ...
// });