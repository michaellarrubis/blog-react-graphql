require('dotenv').config();

console.log(process.env.REACT_FB_PROJECT_ID);

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBE6AKgp9cNWEE2vQb4Ox0W2aYTonxgcYc",
    authDomain: "imageuploadblog.firebaseapp.com",
    databaseURL: "https://imageuploadblog.firebaseio.com",
    projectId: "imageuploadblog",
    storageBucket: "imageuploadblog.appspot.com",
    messagingSenderId: "122085179679",
    appId: "1:122085179679:web:49a7f9bce4040613cab02a",
    measurementId: "G-C159RRELZ8"
};
// Initialize Firebase

export default firebaseConfig;
