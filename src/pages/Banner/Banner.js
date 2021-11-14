import React from 'react';
import './Banner.css';
import banner from '../../images/banner8.png'

const Banner = () => {
    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <div className="me-5">
                <h1 className="text-white fw-bold mt-3 mb-3">WELCOME TO <span className="text-warning fw-bold">AUTO CAR</span></h1>
                <p className="text-white mb-4">Lorem ipsum dolor sit, amet <br />  adipisicing elit. Sunt, fugit!</p>
                <button className="btn bg-warning text-white fw-bold">GET STARTED NOW</button>
            </div>
            <div className="ms-5">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;