import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfbUyGPc-aTPuzxGWbEYNcf1xdSdujuz8",
    authDomain: "todo-v-b7fd9.firebaseapp.com",
    projectId: "todo-v-b7fd9",
    storageBucket: "todo-v-b7fd9.appspot.com",
    messagingSenderId: "893534776420",
    appId: "1:893534776420:web:af6fb40d4264a818c0c371"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};