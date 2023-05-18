
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClDerOCOQG5zsf7t0l4-GMwHmSNlexaGg",
  authDomain: "assignment-11-a242a.firebaseapp.com",
  projectId: "assignment-11-a242a",
  storageBucket: "assignment-11-a242a.appspot.com",
  messagingSenderId: "644511879701",
  appId: "1:644511879701:web:5fef0568af6dcdc413341c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default app;