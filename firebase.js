import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi26AxZYB4DWd0lT12sD9YhAN4wzzVHVc",
  authDomain: "insat-story-reactnative.firebaseapp.com",
  projectId: "insat-story-reactnative",
  storageBucket: "insat-story-reactnative.appspot.com",
  messagingSenderId: "926753414619",
  appId: "1:926753414619:web:6b2016db5df0b1b0629bfe",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
