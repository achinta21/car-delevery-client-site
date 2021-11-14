import React from 'react';

const Footer = () => {
    return (
        <div className="d-flex justify-content-around align-items-center mt-3 py-5 bg-dark text-white fw-bold">
            <div>
                <h3>About US</h3>
                <p>Email: autocar78@gmail.com</p>
                <p>phone: +1234789651</p>
            </div>
            <div className="">
                <form>
                    <h5>Email <input className="rounded-3" type="email" name="" id="" /></h5>
                    <br />
                   <h5>Phone <input className=" rounded-3" type="password" name="" id="" /></h5>
                </form>
            </div>
        </div>
    );
};

export default Footer;