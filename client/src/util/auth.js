import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "ryscott-artboard.firebaseapp.com",
  projectId: "ryscott-artboard",
  storageBucket: "ryscott-artboard.appspot.com",
  messagingSenderId: "212223296863",
  appId: "1:212223296863:web:59de6dda2cf4684d2062ea",
  measurementId: "G-LVM5W68H2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var signUp = function(email, password, state) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      console.log(userCredential);

      // TODO: create user in DB, setUser to that

      state.setUser(user);
      state.setView('home');
    })
    .catch((error) => {
      console.log(error);
    });
};

var signIn = function(email, password, state) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      console.log(userCredential);

      // TODO: get user from DB, setUser to that

      document.cookie = `user=${user.uid}`;

      state.setUser(user);
      state.setView('home');
    })
    .catch((error) => {
      console.log(error);
    });
};

var methods = {
  signUp: signUp,
  signIn: signIn
};

export default methods;