import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC8_frJde3gfz4At4W69KoEZz019UG8Sno",
    authDomain: "yt-clone-16.firebaseapp.com",
    projectId: "yt-clone-16",
    storageBucket: "yt-clone-16.appspot.com",
    messagingSenderId: "124493787111",
    appId: "1:124493787111:web:64725b13f66a359baad742"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()