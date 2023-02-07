import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCNxjy2-rTAxmdq2uhPPWnO5euI64982sw",
  authDomain: "react-native-ae5f7.firebaseapp.com",
  projectId: "react-native-ae5f7",
  storageBucket: "react-native-ae5f7.appspot.com",
  messagingSenderId: "677600629143",
  appId: "1:677600629143:web:55a37b0ae6ed2e2849b4d2",
  measurementId: "G-GEMCHN3CVX"
};


export default firebase.initializeApp(firebaseConfig);