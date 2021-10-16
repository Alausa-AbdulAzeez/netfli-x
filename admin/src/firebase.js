// import firebase from "firebase/storage/";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBImL-_aJx83r9m-fqEbPnp6XdzNA9Vs64",
  authDomain: "netflix-1b6f1.firebaseapp.com",
  projectId: "netflix-1b6f1",
  storageBucket: "netflix-1b6f1.appspot.com",
  messagingSenderId: "413728308499",
  appId: "1:413728308499:web:6ae2eeebbbaf416b096ee6",
  measurementId: "G-5986LPBLH0",
};

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();
// export default storage;
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
