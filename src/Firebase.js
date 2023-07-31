import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrHf6mBaugVBBp3iRU03PWKO624o9NFQQ",
  authDomain: "api-calls-70500.firebaseapp.com",
  databaseURL: "https://api-calls-70500-default-rtdb.firebaseio.com",
  projectId: "api-calls-70500",
  storageBucket: "api-calls-70500.appspot.com",
  messagingSenderId: "56079485259",
  appId: "1:56079485259:web:ba4adc4518c2b2a54b40ce"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
