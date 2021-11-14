import React from 'react';
import './Contract.css';
import contract from '../../images/banner9.png'

const Contract = () => {
    return (
        <div>
        <div className="contact-item">
            <img className="w-50" src={contract} alt="" />
        </div>
        <div className="contact">
        <h1 className="text-white fw-bold my-4">Send Message Contact</h1>
        <div className="m-auto">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <br />
            <textarea name="" id="" cols="35" rows="8" placeholder="message"></textarea>
            <br />
            <input className="bg-warning fw-bold" type="submit" value="Submit" />
        </div>
        </div>
    </div>
    );
};

export default Contract;