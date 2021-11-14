import React from 'react';
import './TopProducet.css';
import newCar from '../../images/car-img-03.png'
const TopProducet = () => {
    return (
        <div className="topbanner">
            <h2 className="fw-bold my-5">Welcome To Best Car 2021</h2>
            <div className="carmodel d-flex justify-content-center my-5  align-items-center">
            <div className="topCar">
            <img src={newCar} alt="" />
            </div>
            <div className="newcar">
                <h4 className="fw-bold">Are you looking to buy a</h4>
                <h4 className="fw-bold">Top Car ?</h4>
                <p>Start searching our inventory that includes 2000+ cars</p>
                <button className="btn allbutton fw-bold">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default TopProducet;