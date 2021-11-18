import React, { useEffect, useState } from 'react';
import More from '../More/More';

const Mores = () => {
const[mores,setMores]=useState([]);
useEffect(()=>{
    fetch('https://frozen-inlet-69668.herokuapp.com/users')
    .then(res=>res.json())
    .then(data=>setMores(data))
},[])
    return (
        <div className="producets-top mx-5">
           <div>
                
           </div>
           <h2 className="fw-bold my-5">More Products</h2>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
                {
                mores.map(more=><More key={more.id} more={more}></More>)
                }
            </div>
        </div>
    );
};

export default Mores;