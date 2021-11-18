import React from 'react';
import { Link } from 'react-router-dom';
import Purchase from '../../Purchase/Purchase';
import './Producet.css';

const Producet = ({producet}) => {
    const{name,title,prices,img,km}=producet
    const [openBooking, setBookingOpen] = React.useState(false);
     const handleBookingOpen = () => setBookingOpen(true);
     const handleBookingClose = () => setBookingOpen(false);
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
                         <button onClick={handleBookingOpen} className="allbutton btn  rounded-3 fw-bold ">Buy Now </button>
                    </div>
                </div>
            </div>
           <Purchase
           producet={producet}
           openBooking={openBooking}
           handleBookingClose={handleBookingClose}
           >

           </Purchase>
        </div>
    );
};

export default Producet;

// to={`/purchase/${id}`}