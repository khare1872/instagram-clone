import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpxOB1v2QLz22evjq0bafIYdvKBuK1YTg",
  authDomain: "cloneinstagramsk.firebaseapp.com",
  projectId: "cloneinstagramsk",
  storageBucket: "cloneinstagramsk.appspot.com",
  messagingSenderId: "360258802255",
  appId: "1:360258802255:web:0710359950dd13ca9dd03a",
  measurementId: "G-KKGV9Q73XG"
});
const db = firebaseApp.firestore();
const auth =firebase.auth();
const storage = firebase.storage();

export { db,auth, storage};
