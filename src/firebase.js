import firebase from 'firebase/app';
var firebaseConfig = {
  apiKey: "AIzaSyCR88mqefmxxtlXegYI6YhMB13xFTU6dAE",
  authDomain: "quick-travis2.firebaseapp.com",
  databaseURL: "https://quick-travis2.firebaseio.com",
  projectId: "quick-travis2",
  storageBucket: "quick-travis2.appspot.com",
  messagingSenderId: "504046538903",
  appId: "1:504046538903:web:122456b73fd2b65060d9d2",
  measurementId: "G-5K2DPSX6J9"
};
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;