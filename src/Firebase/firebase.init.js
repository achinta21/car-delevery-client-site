import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAppAuthention=()=>{
    initializeApp(firebaseConfig)
} 
export default initializeAppAuthention;