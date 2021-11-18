import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmine = () => {
    const[email,setEmail]=useState('');
    const [success,setSuccess]=useState(false);
    const{token}=useAuth();
    const handelOnBlur=e=>{
        setEmail(e.target.value)
    }
    const handelAdmineSubmit=e=>{
        const user={email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
                setEmail('')
                console.log(data)
            }
           
        })

        e.preventDefault()
    }
    return (
        <div>
            <h2>welcome to makeadmine</h2>
            <form onSubmit={handelAdmineSubmit}>
            <div className="row">
            <div className="col">
                 <input onBlur={handelOnBlur} type="email" className="form-control w-50 m-auto" placeholder="email" aria-label="First name" />
                 <button className="btns my-2" type="submit">Make Admine</button>
             </div>
             </div>
            </form>
            {success && <alert className='text-success'>Made Admin successfully</alert>}
        </div>
    );
};

export default MakeAdmine;