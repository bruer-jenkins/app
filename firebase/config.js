import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA8Zk0KFZAKEysN_rvQFHzt9so9JDCdm3s",
    authDomain: "training-c28dc.firebaseapp.com",
    projectId: "training-c28dc",
    storageBucket: "training-c28dc.appspot.com",
    messagingSenderId: "1001495543679",
    appId: "1:1001495543679:web:e8a6dd56e76617236ce44a",
    measurementId: "G-1G681VTEZM"
  };

const app = initializeApp(firebaseConfig);

export default app;