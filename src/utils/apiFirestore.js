// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvnPHG4REofIGvy-O67VkOmfefwsiOyLQ",
    authDomain: "yolotube.firebaseapp.com",
    projectId: "yolotube",
    storageBucket: "yolotube.appspot.com",
    messagingSenderId: "821684117713",
    appId: "1:821684117713:web:ce047eb8cc500262c8a5f0",
    measurementId: "G-1GRXCCK0B2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const apidb = getFirestore(app);


// Get a list of cities from your database
// export const apiDb = async(query) =>{
//     console.log(query);
//     const data_yolotube = collection(db, 'data-yolotube');
//     const dataSnapshot = await getDocs(data_yolotube);
//     const dataList = dataSnapshot.docs.map(doc => doc.data());
//     return dataList;
// }
