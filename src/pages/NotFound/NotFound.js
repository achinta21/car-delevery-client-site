import React from 'react';
import notfound from '../../images/NotFound.png'

const NotFound = () => {
    return (
        <div>
            <h4 className="text-danger">page is not found please try agian</h4>
            <img src={notfound} alt=""/>
        </div>
    );
};

export default NotFound;