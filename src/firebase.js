import firebase from "firebase";
import 'firebase/firestore';
// import '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDuTt6AYwkcOD_jJ4B1IwY0R-3rrL4o3T8",
    authDomain: "disney-plus-3dc00.firebaseapp.com",
    projectId: "disney-plus-3dc00",
    storageBucket: "disney-plus-3dc00.appspot.com",
    messagingSenderId: "102357942924",
    appId: "1:102357942924:web:bf2298beba2c015099b1a9",
    measurementId: "G-0LDR1QH2W6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// also tried: 
// var db = firebase.firestore(app);
// var db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;


// export { auth, provider, storage };
// export default db;