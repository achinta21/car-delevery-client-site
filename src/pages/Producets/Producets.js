import React, { useEffect, useState } from 'react';
import Producet from '../Producet/Producet';
import './Producets.css';

const Producets = () => {
    const[producets,setProducets]=useState([]);
    useEffect(()=>{
        fetch('producets.JSON')
        .then(res=>res.json())
        .then(data=>setProducets(data))
    },[])
    return (
        <div className="producets-top mx-5">
            <h2 className="fw-bold my-5">New Car Producets</h2>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
                {
                producets.map(producet=><Producet key={producet._id} producet={producet}></Producet>)
                }
            </div>
        </div>
    );
};

export default Producets;