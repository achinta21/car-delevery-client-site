import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,signInWithEmailAndPassword ,createUserWithEmailAndPassword,updateProfile,getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";


import initializeAppAuthention from "../Firebase/firebase.init";

initializeAppAuthention();
const useFirebase=()=>{
    const [user,setUser]= useState({});
    const[textError,setTexterror]=useState('');
    const[admin,setAdmin]=useState(false);
    const[token,setToken]=useState('')
    const auth=getAuth();

    const registerUser=(email,password,name,history)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const newUser={email,displayName:name};
            setUser(newUser);
            saveUser(email,name,'POST');
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
            const user=result.user;
            saveUser(user.email,user.displayName,'PUT')
            // setUser(result.user)
        });
        
        };
        const loginUser=(email,password,location,history)=>{
            signInWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 const destination=location?.state?.from|| '/';
                 history.replace(destination)
              setTexterror('')
                 })
                .catch((error) => {
                    setTexterror(error.message);
                    });
                 };


        useEffect(()=>{
         const unsubscibed=onAuthStateChanged(auth,(user)=>{
                if(user){
                    setUser(user)
                    getIdToken(user)
                    .then(idToken=>{
                       setToken(idToken)
                    })
                }
                else{
                    setUser({})
                }
            });
            return()=>unsubscibed;
        },[])
        useEffect(()=>{
            fetch(`http://localhost:5000/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin))
        },[user.email]);

        const logOut =() =>{
            signOut(auth)
            .then(()=>{ });

    }

    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        fetch('http://localhost:5000/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
        
    }
    return{
        user,
        admin,
        token,
        textError,
        registerUser,
        logOut,
        singInusingGoogle,
        loginUser
        
    }

};
export default useFirebase;