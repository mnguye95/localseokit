// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPoKsPsu9r4nuO5FdVBnlW4LPKGFZu1QE",
  authDomain: "localseokit.firebaseapp.com",
  projectId: "localseokit",
  storageBucket: "localseokit.appspot.com",
  messagingSenderId: "598218718777",
  appId: "1:598218718777:web:87c59dcca1057d46cc17e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app