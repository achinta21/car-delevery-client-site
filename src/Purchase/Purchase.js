import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Purchase  = () => {
    const{producetId}=useParams();
    const[producet,setProducet]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:3000/purchase/${producetId}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },
    [])

    
    return (
         <div>
            <h3>name: {producet?.name}</h3>
         </div>
    );
};

export default Purchase ;