import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,signInWithEmailAndPassword ,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect } from "react";

import { useState } from "react/cjs/react.development";
import initializeAppAuthention from "../Firebase/firebase.init";

initializeAppAuthention();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const[textError,setTexterror]=useState('');
    const auth=getAuth();
    const registerUser=(email,password,name,history)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const newUser={email,displayName:name};
            setUser(newUser);
            updateProfile(auth.currentUser, {
                displayName:name, 
              }).then(() => {
              }).catch((error) => {
              });
            history.replace('/');
            const user = userCredential.user;
           
          })
          .catch((error) => {
            setTexterror(error.message);
          });
    }
    const singInusingGoogle=(location,history)=>{
        const googleProvider=new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        });
        
        };
        const loginUser=(email,password)=>{
            signInWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
              setTexterror('')
                 })
                .catch((error) => {
                    setTexterror(error.message);
                    });
                 };


        useEffect(()=>{
         const unsubscibed=onAuthStateChanged(auth,user=>{
                if(user){
                    setUser(user)
                }
                else{
                    setUser({})
                }
            });
            return()=>unsubscibed;
        },[])
        const logOut =() =>{
            signOut(auth)
            .then(()=>{ });

    }
    return{
        user,
        textError,
        registerUser,
        logOut,
        singInusingGoogle,
        loginUser
        
    }

}
export default useFirebase;