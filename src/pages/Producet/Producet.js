import React from 'react';
import { Link } from 'react-router-dom';
import Purchase from '../../Purchase/Purchase';
import './Producet.css';

const Producet = ({producet}) => {
    const{id,name,title,prices,img,km}=producet
    return (
        <div>
            <div className="producet-item col">
                <div className="h-80">
                     <img src={img} className="card-img-top " alt="..."/>
                     <div className="card-body">
                         <h5>{name}</h5>
                         <p className="card-title">{title}</p>
                         <p>km: {km}</p>
                         <p className="fw-bold">prices: $ {prices}</p>
                         <Link to={`/purchase/${id}`}><button className="allbutton btn  rounded-3 fw-bold ">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producet;