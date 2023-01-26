import { initializeApp } from "firebase/app";
import { getAuth,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut } from "firebase/auth";

import ax from './ax.js';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "ryscott-artboard.firebaseapp.com",
  projectId: "ryscott-artboard",
  storageBucket: "ryscott-artboard.appspot.com",
  messagingSenderId: "212223296863",
  appId: "1:212223296863:web:59de6dda2cf4684d2062ea",
  measurementId: "G-LVM5W68H2Q"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

var signUp = function(user, state) {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      user.uid = userCredential.user.uid;

      ax.createUser(user, state);
    })
    .catch((error) => {
      console.log(error);
    });
};

var signIn = function(email, password, state) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      ax.getUser(user.uid, state);
    })
    .catch((error) => {
      console.log(error);
    });
};

var logOut = function() {
  signOut(auth).then(() => {
    console.log('Firebase signOut successful.')
  }).catch((error) => {
      console.log(error);
  });
};

var methods = {
  signUp: signUp,
  signIn: signIn,
  logOut: logOut
};

export default methods;