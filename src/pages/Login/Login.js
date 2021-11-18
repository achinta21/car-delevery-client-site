import React from 'react';
import { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData,setLoginData]=useState({});
    const{user,loginUser,singInusingGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();

    const handelOnChinge=e=>{
        const field=e.target.name;
        const value=e.target.value;
       const newLoginData={...loginData};
       newLoginData[field]=value;
       setLoginData(newLoginData);
    }
   const handelLoginSubmit= e =>{
       alert('hello')
        loginUser(loginData.email,loginData.password,location,history);
        history.replace('/')
       e.preventDefault();
   }
   const handelGoogleSignIn=()=>{
    singInusingGoogle(location,history)
    history.replace('/')
   }
    return (
        <div>
             <div className="login">
            <div className="contact">
            <h1 className="text-white fw-bold my-4">Please Login</h1>
            <form onSubmit ={handelLoginSubmit}>
            <div className="m-auto">
                <input onChange={handelOnChinge} type="text" placeholder="Email" name="email" id="standard-basic"/>
                <input onChange={handelOnChinge} type="Password" placeholder="Password" name="Password" id="standard-basic"/>
                <br />
                <input className="submit fw-bold" type="submit" value="Submit" /> 
            </div>
            </form>
            <button onClick={handelGoogleSignIn} className="submit fw-bold ">Google Login</button>
            <Link to="/register"><button className="submit fw-bold">Register Now</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Login;