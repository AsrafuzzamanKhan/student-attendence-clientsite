// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.REACT_APP_apiKey,
//     authDomain: import.meta.env.REACT_APP_authDomain,
//     projectId: import.meta.env.REACT_APP_projectId,
//     storageBucket: import.meta.env.REACT_APP_storageBucket,
//     messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
//     appId: import.meta.env.REACT_APP_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAZ-eR3EyhEXyEbxUYeFJfL8zxm60nod_c",
    authDomain: "students-attendence1.firebaseapp.com",
    projectId: "students-attendence1",
    storageBucket: "students-attendence1.appspot.com",
    messagingSenderId: "236807860296",
    appId: "1:236807860296:web:dc84c361b436f09a6a687d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;