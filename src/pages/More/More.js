import React from 'react';
import Purchase from '../../Purchase/Purchase';

const More = ({more}) => {
    const{name,title,prices,km,img}=more;
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
                         <button className="allbutton btn  rounded-3 fw-bold ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default More;