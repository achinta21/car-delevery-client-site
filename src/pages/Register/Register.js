import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';



const Register = () => {
    const [loginData,setLoginData]=useState({});
    const{user,registerUser}=useAuth();
    const history=useHistory();
    const handelOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
       const newLoginData={...loginData};
       newLoginData[field]=value;
       setLoginData(newLoginData);
    }
   const handelLoginSubmit=e=>{
        if(loginData.password!==loginData.password2){
            alert('your password did not match');
            return;
        }
        registerUser(loginData.email , loginData.password,history);
       e.preventDefault();
   }
    
    return (
        <div>
        <div className="register">
       <div className="register-item">
       <h1 className="text-white fw-bold my-4">Please Register</h1>
       <form onSubmit={handelLoginSubmit}>
       <div className="m-auto">
           <input onBlur={handelOnBlur} className="input-file"   placeholder="Name" name="name" required/>
           <br />
           <input onBlur={handelOnBlur} className="input-file"  type="email" placeholder="Email" name="email" required/>
           <br />
           <input onBlur={handelOnBlur} className="input-file"  type="password" placeholder="Password" name="password" required/>
           <br />
           <input onBlur={handelOnBlur} className="input-file"  type="password" placeholder="Retype Password"name="password2" required/>
           <br />
           {user?.email && alert('your account successfully')}
           <div className="m-auto text-danger fw-bold"></div>
           <input className="submit fw-bold" type="submit" value="Submit" /> 
           <Link to="/login"><button className=" submit fw-bold">AllReady Login</button></Link>
       </div>
       </form>
       
       </div>
   </div>
   </div>
    );
};

export default Register;