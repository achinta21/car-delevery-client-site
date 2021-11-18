import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const{user,logOut}=useAuth();
    return (
      <div className="header">
      <nav className="navbar navbar-expand-lg navbar-white bg-primary">
          <div className="container-fluid">
           <h2 className="fw-bold ms-5 text-white">Autocar</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
          <div className="collapse navbar-collapse  me-5 d-flex justify-content-end" id="navbarTogglerDemo02">
        <ul className="navbar-nav mt-2 mb-lg-0 fs-5">
          <li className="nav-item">
            <Link className="header-link  fw-bold me-4 text-white" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="header-link fw-bold me-4 text-white" to="/more">More item</Link>
          </li>
          <li className="nav-item">
            <Link className="header-link  fw-bold me-4 text-white" to="/contract">Contact</Link>
          </li>
            <p className="me-3 fw-bold">{user?.displayName}</p>
           <li className="nav-item">
              {user?.email?
              <li> 
                 <Link className="header-link  fw-bold me-3" to="/dashboard"><button className="btn bg-warning fw-bold">Dashboard</button></Link>
                  <button onClick={logOut} className="btn bg-white fw-bold">LogOut</button>
              </li>
                :
                <Link className="header-link  fw-bold me-3" to="/login"><button className="btn bg-warning fw-bold">Log in</button></Link>}
          </li>
        </ul>
      </div>
    </div>
  </nav>
          </div>
    );
};

export default Header;