import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBthh-l13d2XcDhq3y6VKl2lda4vuHYAtU",
  authDomain: "ccpis-bf841.firebaseapp.com",
  projectId: "ccpis-bf841",
  storageBucket: "ccpis-bf841.appspot.com",
  messagingSenderId: "356646886111",
  appId: "1:356646886111:web:d0a385c6d41077dc34276a",
  measurementId: "G-RMHLJWQE7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
