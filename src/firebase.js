import firebase from 'firebase/app';
var firebaseConfig = {
    apiKey: "AIzaSyDaQgYwd4U3X38xPBHKmOaf6bHTw20PDrU",
    authDomain: "healthpassport-f3da3.firebaseapp.com",
    databaseURL: "https://healthpassport-f3da3.firebaseio.com",
    projectId: "healthpassport-f3da3",
    storageBucket: "healthpassport-f3da3.appspot.com",
    messagingSenderId: "846956265889",
    appId: "1:846956265889:web:8517a3e88af0965d4c8be0"
  };
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;