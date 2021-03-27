import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAU1o-lrjxmiPWb7pl816OWgGNIkPhd3Z8",
    authDomain: "whatsapp-clone-9ca2f.firebaseapp.com",
    projectId: "whatsapp-clone-9ca2f",
    storageBucket: "whatsapp-clone-9ca2f.appspot.com",
    messagingSenderId: "69885635049",
    appId: "1:69885635049:web:3b739ccdfdf9d8e7f0c378"
}

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()
    

const db = firebase.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }