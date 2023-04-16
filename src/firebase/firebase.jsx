import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  // Your Firebase config object here
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
